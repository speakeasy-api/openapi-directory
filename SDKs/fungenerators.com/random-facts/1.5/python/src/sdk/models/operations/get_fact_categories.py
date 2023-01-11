import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFactCategoriesQueryParams:
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFactCategoriesSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFactCategoriesRequest:
    query_params: GetFactCategoriesQueryParams = dataclasses.field()
    security: GetFactCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFactCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
