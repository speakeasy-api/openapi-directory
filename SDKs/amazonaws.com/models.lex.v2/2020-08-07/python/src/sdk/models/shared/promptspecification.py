import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messagegroup as shared_messagegroup


@dataclass_json
@dataclasses.dataclass
class PromptSpecification:
    r"""PromptSpecification
    Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
    """
    
    max_retries: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    message_groups: list[shared_messagegroup.MessageGroup] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageGroups') }})
    allow_interrupt: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInterrupt') }})
    
