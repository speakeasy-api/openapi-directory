import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFactRandomQueryParams:
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    subcategory: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subcategory', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFactRandomSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFactRandomRequest:
    query_params: GetFactRandomQueryParams = dataclasses.field()
    security: GetFactRandomSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFactRandomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
