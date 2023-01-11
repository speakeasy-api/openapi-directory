import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetUUIDQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUUIDSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetUUIDRequest:
    query_params: GetUUIDQueryParams = dataclasses.field()
    security: GetUUIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
