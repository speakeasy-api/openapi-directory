import dataclasses
from typing import Optional
from ..shared import namespace as shared_namespace


@dataclasses.dataclass
class PutRegistryNamespacesNamespacePathParams:
    namespace: str = dataclasses.field(metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRegistryNamespacesNamespaceHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutRegistryNamespacesNamespaceRequest:
    headers: PutRegistryNamespacesNamespaceHeaders = dataclasses.field()
    path_params: PutRegistryNamespacesNamespacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutRegistryNamespacesNamespaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    namespace: Optional[shared_namespace.Namespace] = dataclasses.field(default=None)
    
