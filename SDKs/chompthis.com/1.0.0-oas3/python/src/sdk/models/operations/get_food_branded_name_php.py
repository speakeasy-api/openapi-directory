import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import brandedfoodobject as shared_brandedfoodobject


@dataclasses.dataclass
class GetFoodBrandedNamePhpQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFoodBrandedNamePhpSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetFoodBrandedNamePhpRequest:
    query_params: GetFoodBrandedNamePhpQueryParams = dataclasses.field()
    security: GetFoodBrandedNamePhpSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFoodBrandedNamePhpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    branded_food_object: Optional[shared_brandedfoodobject.BrandedFoodObject] = dataclasses.field(default=None)
    
