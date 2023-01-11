import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_snippets as shared_paginated_snippets


@dataclasses.dataclass
class GetSnippetsWorkspacePathParams:
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetSnippetsWorkspaceRoleEnum(str, Enum):
    OWNER = "owner"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"


@dataclasses.dataclass
class GetSnippetsWorkspaceQueryParams:
    role: Optional[GetSnippetsWorkspaceRoleEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceRequest:
    path_params: GetSnippetsWorkspacePathParams = dataclasses.field()
    query_params: GetSnippetsWorkspaceQueryParams = dataclasses.field()
    security: GetSnippetsWorkspaceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSnippetsWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_snippets: Optional[shared_paginated_snippets.PaginatedSnippets] = dataclasses.field(default=None)
    
