import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import namespace_response as shared_namespace_response


@dataclasses.dataclass
class GetAppsAppIDNamespacesPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAppsAppIDNamespacesSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAppsAppIDNamespacesRequest:
    path_params: GetAppsAppIDNamespacesPathParams = dataclasses.field()
    security: GetAppsAppIDNamespacesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsAppIDNamespacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    namespace_responses: Optional[list[shared_namespace_response.NamespaceResponse]] = dataclasses.field(default=None)
    
