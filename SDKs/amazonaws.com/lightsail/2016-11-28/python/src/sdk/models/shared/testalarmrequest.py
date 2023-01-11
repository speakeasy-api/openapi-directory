import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alarmstate_enum as shared_alarmstate_enum


@dataclass_json
@dataclasses.dataclass
class TestAlarmRequest:
    alarm_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmName') }})
    state: shared_alarmstate_enum.AlarmStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
