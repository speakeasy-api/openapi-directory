import dataclasses
from typing import Any,Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class ReposGetAppsWithAccessToProtectedBranchPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetAppsWithAccessToProtectedBranchRequest:
    path_params: ReposGetAppsWithAccessToProtectedBranchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetAppsWithAccessToProtectedBranchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    integrations: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
