import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import branch_restriction_policy as shared_branch_restriction_policy


@dataclasses.dataclass
class ReposGetAccessRestrictionsPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetAccessRestrictionsRequest:
    path_params: ReposGetAccessRestrictionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetAccessRestrictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    branch_restriction_policy: Optional[shared_branch_restriction_policy.BranchRestrictionPolicy] = dataclasses.field(default=None)
    
