import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_workspace_memberships as shared_paginated_workspace_memberships


@dataclasses.dataclass
class GetWorkspacesWorkspacePermissionsPathParams:
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePermissionsQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePermissionsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePermissionsRequest:
    path_params: GetWorkspacesWorkspacePermissionsPathParams = dataclasses.field()
    query_params: GetWorkspacesWorkspacePermissionsQueryParams = dataclasses.field()
    security: GetWorkspacesWorkspacePermissionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspacesWorkspacePermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_workspace_memberships: Optional[shared_paginated_workspace_memberships.PaginatedWorkspaceMemberships] = dataclasses.field(default=None)
    
