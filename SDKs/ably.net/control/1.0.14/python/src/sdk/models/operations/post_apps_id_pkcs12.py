import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import app_pkcs12 as shared_app_pkcs12
from ..shared import app_response as shared_app_response
from ..shared import error as shared_error


@dataclasses.dataclass
class PostAppsIDPkcs12PathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAppsIDPkcs12Security:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PostAppsIDPkcs12Request:
    path_params: PostAppsIDPkcs12PathParams = dataclasses.field()
    security: PostAppsIDPkcs12Security = dataclasses.field()
    request: Optional[shared_app_pkcs12.AppPkcs12] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostAppsIDPkcs12Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_response: Optional[shared_app_response.AppResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
