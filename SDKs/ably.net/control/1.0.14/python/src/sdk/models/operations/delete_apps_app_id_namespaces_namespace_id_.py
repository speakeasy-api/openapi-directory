import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteAppsAppIDNamespacesNamespaceIDPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    namespace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'namespace_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAppsAppIDNamespacesNamespaceIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteAppsAppIDNamespacesNamespaceIDRequest:
    path_params: DeleteAppsAppIDNamespacesNamespaceIDPathParams = dataclasses.field()
    security: DeleteAppsAppIDNamespacesNamespaceIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAppsAppIDNamespacesNamespaceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
