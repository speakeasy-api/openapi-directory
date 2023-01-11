import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteQueryParams:
    cid: int = dataclasses.field(metadata={'query_param': { 'field_name': 'cid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteRequest:
    query_params: DeleteQueryParams = dataclasses.field()
    security: DeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
