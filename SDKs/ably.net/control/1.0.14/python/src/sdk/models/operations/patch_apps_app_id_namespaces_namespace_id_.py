import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import namespace_patch as shared_namespace_patch
from ..shared import error as shared_error
from ..shared import namespace_response as shared_namespace_response


@dataclasses.dataclass
class PatchAppsAppIDNamespacesNamespaceIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    namespace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'namespace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchAppsAppIDNamespacesNamespaceIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class PatchAppsAppIDNamespacesNamespaceIDRequest:
    path_params: PatchAppsAppIDNamespacesNamespaceIDPathParams = dataclasses.field()
    security: PatchAppsAppIDNamespacesNamespaceIDSecurity = dataclasses.field()
    request: Optional[shared_namespace_patch.NamespacePatch] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchAppsAppIDNamespacesNamespaceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    namespace_response: Optional[shared_namespace_response.NamespaceResponse] = dataclasses.field(default=None)
    
