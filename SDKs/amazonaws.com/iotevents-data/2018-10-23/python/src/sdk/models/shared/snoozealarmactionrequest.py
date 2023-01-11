import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SnoozeAlarmActionRequest:
    r"""SnoozeAlarmActionRequest
    Information needed to snooze the alarm.
    """
    
    alarm_model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelName') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    snooze_duration: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('snoozeDuration') }})
    key_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
