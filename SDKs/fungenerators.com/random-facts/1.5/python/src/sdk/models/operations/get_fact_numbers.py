import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFactNumbersQueryParams:
    number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFactNumbersSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFactNumbersRequest:
    query_params: GetFactNumbersQueryParams = dataclasses.field()
    security: GetFactNumbersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFactNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
