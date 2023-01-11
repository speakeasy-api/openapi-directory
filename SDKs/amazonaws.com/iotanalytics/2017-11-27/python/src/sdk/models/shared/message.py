import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Message:
    r"""Message
    Information about a message.
    """
    
    message_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    payload: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
