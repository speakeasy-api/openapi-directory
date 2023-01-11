import dataclasses
from typing import Optional
from ..shared import namespace as shared_namespace


@dataclasses.dataclass
class GetRegistryNamespacesNamespacePathParams:
    namespace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryNamespacesNamespaceHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryNamespacesNamespaceRequest:
    headers: GetRegistryNamespacesNamespaceHeaders = dataclasses.field()
    path_params: GetRegistryNamespacesNamespacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRegistryNamespacesNamespaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    namespace: Optional[shared_namespace.Namespace] = dataclasses.field(default=None)
    
