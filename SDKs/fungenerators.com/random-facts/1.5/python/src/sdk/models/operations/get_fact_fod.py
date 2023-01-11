import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFactFodQueryParams:
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFactFodSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFactFodRequest:
    query_params: GetFactFodQueryParams = dataclasses.field()
    security: GetFactFodSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFactFodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
