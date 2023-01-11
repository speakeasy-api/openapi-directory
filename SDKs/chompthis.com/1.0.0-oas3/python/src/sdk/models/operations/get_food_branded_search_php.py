import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import brandedfoodobject as shared_brandedfoodobject

class GetFoodBrandedSearchPhpDietEnum(str, Enum):
    VEGAN = "Vegan"
    VEGETARIAN = "Vegetarian"
    GLUTEN_FREE = "Gluten Free"


@dataclasses.dataclass
class GetFoodBrandedSearchPhpQueryParams:
    allergen: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allergen', 'style': 'form', 'explode': True }})
    brand: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'brand', 'style': 'form', 'explode': True }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    diet: Optional[GetFoodBrandedSearchPhpDietEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'diet', 'style': 'form', 'explode': True }})
    ingredient: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ingredient', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mineral: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mineral', 'style': 'form', 'explode': True }})
    nutrient: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nutrient', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    palm_oil: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'palm_oil', 'style': 'form', 'explode': True }})
    trace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trace', 'style': 'form', 'explode': True }})
    vitamin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vitamin', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFoodBrandedSearchPhpSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetFoodBrandedSearchPhpRequest:
    query_params: GetFoodBrandedSearchPhpQueryParams = dataclasses.field()
    security: GetFoodBrandedSearchPhpSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFoodBrandedSearchPhpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    branded_food_object: Optional[shared_brandedfoodobject.BrandedFoodObject] = dataclasses.field(default=None)
    
