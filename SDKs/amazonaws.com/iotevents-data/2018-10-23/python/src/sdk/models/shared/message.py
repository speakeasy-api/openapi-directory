import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestampvalue as shared_timestampvalue


@dataclass_json
@dataclasses.dataclass
class Message:
    r"""Message
    Information about a message.
    """
    
    input_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    message_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    payload: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    timestamp: Optional[shared_timestampvalue.TimestampValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
