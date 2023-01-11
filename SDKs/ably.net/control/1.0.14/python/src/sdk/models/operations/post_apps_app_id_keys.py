import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import key_post as shared_key_post
from ..shared import error as shared_error
from ..shared import key_response as shared_key_response


@dataclasses.dataclass
class PostAppsAppIDKeysPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAppsAppIDKeysSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PostAppsAppIDKeysRequest:
    path_params: PostAppsAppIDKeysPathParams = dataclasses.field()
    security: PostAppsAppIDKeysSecurity = dataclasses.field()
    request: Optional[shared_key_post.KeyPost] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAppsAppIDKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    key_response: Optional[shared_key_response.KeyResponse] = dataclasses.field(default=None)
    
