import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_workspaces as shared_paginated_workspaces

class GetWorkspacesRoleEnum(str, Enum):
    OWNER = "owner"
    COLLABORATOR = "collaborator"
    MEMBER = "member"


@dataclasses.dataclass
class GetWorkspacesQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[GetWorkspacesRoleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkspacesSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetWorkspacesRequest:
    query_params: GetWorkspacesQueryParams = dataclasses.field()
    security: GetWorkspacesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_workspaces: Optional[shared_paginated_workspaces.PaginatedWorkspaces] = dataclasses.field(default=None)
    
