import dataclasses
from typing import Optional
from ..shared import pull_request_review as shared_pull_request_review


@dataclasses.dataclass
class PullsListReviewsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsListReviewsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PullsListReviewsRequest:
    path_params: PullsListReviewsPathParams = dataclasses.field()
    query_params: PullsListReviewsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsListReviewsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_request_reviews: Optional[list[shared_pull_request_review.PullRequestReview]] = dataclasses.field(default=None)
    
