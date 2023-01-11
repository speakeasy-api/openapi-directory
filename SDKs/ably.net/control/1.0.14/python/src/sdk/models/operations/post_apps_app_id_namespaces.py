import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import namespace_post as shared_namespace_post
from ..shared import error as shared_error
from ..shared import namespace_response as shared_namespace_response


@dataclasses.dataclass
class PostAppsAppIDNamespacesPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAppsAppIDNamespacesSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PostAppsAppIDNamespacesRequest:
    path_params: PostAppsAppIDNamespacesPathParams = dataclasses.field()
    security: PostAppsAppIDNamespacesSecurity = dataclasses.field()
    request: Optional[shared_namespace_post.NamespacePost] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAppsAppIDNamespacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    namespace_response: Optional[shared_namespace_response.NamespaceResponse] = dataclasses.field(default=None)
    
