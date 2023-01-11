import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import pull_request_review as shared_pull_request_review
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class PullsDeletePendingReviewPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    review_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'review_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsDeletePendingReviewRequest:
    path_params: PullsDeletePendingReviewPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsDeletePendingReviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    pull_request_review: Optional[shared_pull_request_review.PullRequestReview] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
