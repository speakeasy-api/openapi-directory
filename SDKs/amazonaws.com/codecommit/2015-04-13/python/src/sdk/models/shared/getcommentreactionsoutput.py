import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reactionforcomment as shared_reactionforcomment


@dataclass_json
@dataclasses.dataclass
class GetCommentReactionsOutput:
    reactions_for_comment: list[shared_reactionforcomment.ReactionForComment] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactionsForComment') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
