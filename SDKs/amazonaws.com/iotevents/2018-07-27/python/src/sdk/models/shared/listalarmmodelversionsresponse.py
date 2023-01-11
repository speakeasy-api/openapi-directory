import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarmmodelversionsummary as shared_alarmmodelversionsummary


@dataclass_json
@dataclasses.dataclass
class ListAlarmModelVersionsResponse:
    alarm_model_version_summaries: Optional[list[shared_alarmmodelversionsummary.AlarmModelVersionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelVersionSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
