import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTeamsUsernameProjectsProjectKeyPathParams:
    project_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsUsernameProjectsProjectKeySecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared_security.SchemeOauth2] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTeamsUsernameProjectsProjectKeyRequest:
    path_params: GetTeamsUsernameProjectsProjectKeyPathParams = dataclasses.field()
    security: GetTeamsUsernameProjectsProjectKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamsUsernameProjectsProjectKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    project: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
