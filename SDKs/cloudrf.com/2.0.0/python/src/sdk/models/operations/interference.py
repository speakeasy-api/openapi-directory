import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class InterferenceQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    network: str = dataclasses.field(metadata={'query_param': { 'field_name': 'network', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class InterferenceSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class InterferenceRequest:
    query_params: InterferenceQueryParams = dataclasses.field()
    security: InterferenceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class InterferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
