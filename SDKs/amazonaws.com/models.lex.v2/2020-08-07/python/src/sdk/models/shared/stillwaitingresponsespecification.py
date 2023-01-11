import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messagegroup as shared_messagegroup


@dataclass_json
@dataclasses.dataclass
class StillWaitingResponseSpecification:
    r"""StillWaitingResponseSpecification
    Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
    """
    
    frequency_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyInSeconds') }})
    message_groups: list[shared_messagegroup.MessageGroup] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageGroups') }})
    timeout_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInSeconds') }})
    allow_interrupt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInterrupt') }})
    
