import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import messagecommentreactionentity as shared_messagecommentreactionentity


@dataclass_json
@dataclasses.dataclass
class MessageCommentEntity:
    r"""MessageCommentEntity
    List Message Comments
    """
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    reactions: Optional[shared_messagecommentreactionentity.MessageCommentReactionEntity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    
