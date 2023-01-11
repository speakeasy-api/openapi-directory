import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarm as shared_alarm


@dataclass_json
@dataclasses.dataclass
class DescribeAlarmResponse:
    alarm: Optional[shared_alarm.Alarm] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarm') }})
    
