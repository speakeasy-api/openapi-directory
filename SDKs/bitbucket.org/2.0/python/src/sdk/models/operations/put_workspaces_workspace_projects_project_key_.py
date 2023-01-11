import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class PutWorkspacesWorkspaceProjectsProjectKeyPathParams:
    project_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWorkspacesWorkspaceProjectsProjectKeySecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutWorkspacesWorkspaceProjectsProjectKeyRequest:
    path_params: PutWorkspacesWorkspaceProjectsProjectKeyPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutWorkspacesWorkspaceProjectsProjectKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutWorkspacesWorkspaceProjectsProjectKeyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    project: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
