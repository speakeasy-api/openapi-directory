import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import paginated_users as shared_paginated_users


@dataclasses.dataclass
class PutSnippetsWorkspaceEncodedIDWatchPathParams:
    encoded_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSnippetsWorkspaceEncodedIDWatchSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutSnippetsWorkspaceEncodedIDWatchRequest:
    path_params: PutSnippetsWorkspaceEncodedIDWatchPathParams = dataclasses.field()
    security: PutSnippetsWorkspaceEncodedIDWatchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutSnippetsWorkspaceEncodedIDWatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    paginated_users: Optional[shared_paginated_users.PaginatedUsers] = dataclasses.field(default=None)
    
