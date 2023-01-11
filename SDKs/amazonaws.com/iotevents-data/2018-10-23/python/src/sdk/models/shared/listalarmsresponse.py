import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarmsummary as shared_alarmsummary


@dataclass_json
@dataclasses.dataclass
class ListAlarmsResponse:
    alarm_summaries: Optional[list[shared_alarmsummary.AlarmSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
