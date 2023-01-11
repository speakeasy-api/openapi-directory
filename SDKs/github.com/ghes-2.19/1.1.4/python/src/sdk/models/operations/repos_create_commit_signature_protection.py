import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import protected_branch_admin_enforced as shared_protected_branch_admin_enforced


@dataclasses.dataclass
class ReposCreateCommitSignatureProtectionPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposCreateCommitSignatureProtectionRequest:
    path_params: ReposCreateCommitSignatureProtectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposCreateCommitSignatureProtectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    protected_branch_admin_enforced: Optional[shared_protected_branch_admin_enforced.ProtectedBranchAdminEnforced] = dataclasses.field(default=None)
    
