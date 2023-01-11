import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteNetworkQueryParams:
    nid: str = dataclasses.field(metadata={'query_param': { 'field_name': 'nid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteNetworkSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteNetworkRequest:
    query_params: DeleteNetworkQueryParams = dataclasses.field()
    security: DeleteNetworkSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
