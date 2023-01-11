import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import pull_request_review_comment as shared_pull_request_review_comment


@dataclasses.dataclass
class PullsGetReviewCommentPathParams:
    comment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsGetReviewCommentRequest:
    path_params: PullsGetReviewCommentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsGetReviewCommentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    pull_request_review_comment: Optional[shared_pull_request_review_comment.PullRequestReviewComment] = dataclasses.field(default=None)
    
