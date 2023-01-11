import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffPathParams:
    encoded_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    revision: str = dataclasses.field(metadata={'path_param': { 'field_name': 'revision', 'style': 'simple', 'explode': False }})
    workspace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffQueryParams:
    path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffRequest:
    path_params: GetSnippetsWorkspaceEncodedIDRevisionDiffPathParams = dataclasses.field()
    query_params: GetSnippetsWorkspaceEncodedIDRevisionDiffQueryParams = dataclasses.field()
    security: GetSnippetsWorkspaceEncodedIDRevisionDiffSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
