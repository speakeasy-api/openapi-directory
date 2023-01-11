import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commentsforpullrequest as shared_commentsforpullrequest


@dataclass_json
@dataclasses.dataclass
class GetCommentsForPullRequestOutput:
    comments_for_pull_request_data: Optional[list[shared_commentsforpullrequest.CommentsForPullRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentsForPullRequestData') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
