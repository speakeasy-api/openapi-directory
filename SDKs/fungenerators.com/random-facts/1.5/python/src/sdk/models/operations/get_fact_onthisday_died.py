import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFactOnthisdayDiedQueryParams:
    day: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'day', 'style': 'form', 'explode': True }})
    month: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFactOnthisdayDiedSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFactOnthisdayDiedRequest:
    query_params: GetFactOnthisdayDiedQueryParams = dataclasses.field()
    security: GetFactOnthisdayDiedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFactOnthisdayDiedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
