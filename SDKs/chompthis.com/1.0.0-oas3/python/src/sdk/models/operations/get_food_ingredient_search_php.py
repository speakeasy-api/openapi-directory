import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ingredientobject as shared_ingredientobject


@dataclasses.dataclass
class GetFoodIngredientSearchPhpQueryParams:
    find: str = dataclasses.field(metadata={'query_param': { 'field_name': 'find', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFoodIngredientSearchPhpSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetFoodIngredientSearchPhpRequest:
    query_params: GetFoodIngredientSearchPhpQueryParams = dataclasses.field()
    security: GetFoodIngredientSearchPhpSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFoodIngredientSearchPhpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ingredient_object: Optional[shared_ingredientobject.IngredientObject] = dataclasses.field(default=None)
    
