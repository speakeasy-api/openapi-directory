import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class MeshQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    network: str = dataclasses.field(metadata={'query_param': { 'field_name': 'network', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MeshSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class MeshRequest:
    query_params: MeshQueryParams = dataclasses.field()
    security: MeshSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MeshResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
