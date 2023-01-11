import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import message as shared_message


@dataclass_json
@dataclasses.dataclass
class MessageGroup:
    r"""MessageGroup
    Provides one or more messages that Amazon Lex should send to the user.
    """
    
    message: shared_message.Message = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    variations: Optional[list[shared_message.Message]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variations') }})
    
