import dataclasses
from typing import Optional
from ..shared import namespace as shared_namespace


@dataclasses.dataclass
class GetRegistryNamespacesHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryNamespacesRequest:
    headers: GetRegistryNamespacesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetRegistryNamespacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    namespace: Optional[shared_namespace.Namespace] = dataclasses.field(default=None)
    
