import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import branch_protection as shared_branch_protection


@dataclasses.dataclass
class ReposGetBranchProtectionPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetBranchProtectionRequest:
    path_params: ReposGetBranchProtectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetBranchProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    branch_protection: Optional[shared_branch_protection.BranchProtection] = dataclasses.field(default=None)
    
