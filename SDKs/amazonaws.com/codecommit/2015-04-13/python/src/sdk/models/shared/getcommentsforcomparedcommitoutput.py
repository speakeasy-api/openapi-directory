import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commentsforcomparedcommit as shared_commentsforcomparedcommit


@dataclass_json
@dataclasses.dataclass
class GetCommentsForComparedCommitOutput:
    comments_for_compared_commit_data: Optional[list[shared_commentsforcomparedcommit.CommentsForComparedCommit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentsForComparedCommitData') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
