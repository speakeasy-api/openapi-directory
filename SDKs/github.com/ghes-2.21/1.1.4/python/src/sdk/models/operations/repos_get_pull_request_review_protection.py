import dataclasses
from typing import Optional
from ..shared import protected_branch_pull_request_review as shared_protected_branch_pull_request_review


@dataclasses.dataclass
class ReposGetPullRequestReviewProtectionPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetPullRequestReviewProtectionRequest:
    path_params: ReposGetPullRequestReviewProtectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetPullRequestReviewProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protected_branch_pull_request_review: Optional[shared_protected_branch_pull_request_review.ProtectedBranchPullRequestReview] = dataclasses.field(default=None)
    
