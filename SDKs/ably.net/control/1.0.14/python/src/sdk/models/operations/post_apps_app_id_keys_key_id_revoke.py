import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class PostAppsAppIDKeysKeyIDRevokePathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    key_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAppsAppIDKeysKeyIDRevokeSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PostAppsAppIDKeysKeyIDRevokeRequest:
    path_params: PostAppsAppIDKeysKeyIDRevokePathParams = dataclasses.field()
    security: PostAppsAppIDKeysKeyIDRevokeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostAppsAppIDKeysKeyIDRevokeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
