import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarmmodelsummary as shared_alarmmodelsummary


@dataclass_json
@dataclasses.dataclass
class ListAlarmModelsResponse:
    alarm_model_summaries: Optional[list[shared_alarmmodelsummary.AlarmModelSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
