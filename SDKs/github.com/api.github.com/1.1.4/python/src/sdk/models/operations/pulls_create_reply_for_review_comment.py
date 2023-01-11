import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import pull_request_review_comment as shared_pull_request_review_comment


@dataclasses.dataclass
class PullsCreateReplyForReviewCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PullsCreateReplyForReviewCommentRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclasses.dataclass
class PullsCreateReplyForReviewCommentRequest:
    path_params: PullsCreateReplyForReviewCommentPathParams = dataclasses.field()
    request: Optional[PullsCreateReplyForReviewCommentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PullsCreateReplyForReviewCommentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    pull_request_review_comment: Optional[shared_pull_request_review_comment.PullRequestReviewComment] = dataclasses.field(default=None)
    
