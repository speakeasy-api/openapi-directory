import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AcknowledgeAlarmActionRequest:
    r"""AcknowledgeAlarmActionRequest
    Information needed to acknowledge the alarm.
    """
    
    alarm_model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelName') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    key_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
