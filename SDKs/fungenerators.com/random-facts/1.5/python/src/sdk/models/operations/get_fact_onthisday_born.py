import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFactOnthisdayBornQueryParams:
    day: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'day', 'style': 'form', 'explode': True }})
    month: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFactOnthisdayBornSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFactOnthisdayBornRequest:
    query_params: GetFactOnthisdayBornQueryParams = dataclasses.field()
    security: GetFactOnthisdayBornSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFactOnthisdayBornResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
