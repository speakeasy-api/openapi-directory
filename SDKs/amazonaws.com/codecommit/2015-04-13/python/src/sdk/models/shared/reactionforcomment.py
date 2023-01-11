import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reactionvalueformats as shared_reactionvalueformats


@dataclass_json
@dataclasses.dataclass
class ReactionForComment:
    r"""ReactionForComment
    Information about the reaction values provided by users on a comment.
    """
    
    reaction: Optional[shared_reactionvalueformats.ReactionValueFormats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reaction') }})
    reaction_users: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactionUsers') }})
    reactions_from_deleted_users_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactionsFromDeletedUsersCount') }})
    
