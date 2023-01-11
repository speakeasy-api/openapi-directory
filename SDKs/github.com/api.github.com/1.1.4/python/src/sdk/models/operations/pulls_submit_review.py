import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import pull_request_review as shared_pull_request_review
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class PullsSubmitReviewPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    review_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'review_id', 'style': 'simple', 'explode': False }})
    
class PullsSubmitReviewRequestBodyEventEnum(str, Enum):
    APPROVE = "APPROVE"
    REQUEST_CHANGES = "REQUEST_CHANGES"
    COMMENT = "COMMENT"


@dataclass_json
@dataclasses.dataclass
class PullsSubmitReviewRequestBody:
    event: PullsSubmitReviewRequestBodyEventEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclasses.dataclass
class PullsSubmitReviewRequest:
    path_params: PullsSubmitReviewPathParams = dataclasses.field()
    request: Optional[PullsSubmitReviewRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PullsSubmitReviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    pull_request_review: Optional[shared_pull_request_review.PullRequestReview] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
