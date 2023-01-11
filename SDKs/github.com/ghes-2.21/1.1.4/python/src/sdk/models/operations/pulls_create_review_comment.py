import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import pull_request_review_comment as shared_pull_request_review_comment
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class PullsCreateReviewCommentPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class PullsCreateReviewCommentRequestBodySideEnum(str, Enum):
    LEFT = "LEFT"
    RIGHT = "RIGHT"

class PullsCreateReviewCommentRequestBodyStartSideEnum(str, Enum):
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    SIDE = "side"


@dataclass_json
@dataclasses.dataclass
class PullsCreateReviewCommentRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    commit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_id') }})
    in_reply_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_reply_to') }})
    line: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    side: Optional[PullsCreateReviewCommentRequestBodySideEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('side') }})
    start_line: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    start_side: Optional[PullsCreateReviewCommentRequestBodyStartSideEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_side') }})
    

@dataclasses.dataclass
class PullsCreateReviewCommentRequest:
    path_params: PullsCreateReviewCommentPathParams = dataclasses.field()
    request: Optional[PullsCreateReviewCommentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PullsCreateReviewCommentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    pull_request_review_comment: Optional[shared_pull_request_review_comment.PullRequestReviewComment] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
