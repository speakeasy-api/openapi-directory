import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutCommentReactionInput:
    comment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentId') }})
    reaction_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactionValue') }})
    
