import dataclasses
from typing import Optional
from ..shared import protected_branch_admin_enforced as shared_protected_branch_admin_enforced


@dataclasses.dataclass
class ReposGetAdminBranchProtectionPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetAdminBranchProtectionRequest:
    path_params: ReposGetAdminBranchProtectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetAdminBranchProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    protected_branch_admin_enforced: Optional[shared_protected_branch_admin_enforced.ProtectedBranchAdminEnforced] = dataclasses.field(default=None)
    
