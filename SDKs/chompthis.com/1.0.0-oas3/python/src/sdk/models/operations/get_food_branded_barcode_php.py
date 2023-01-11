import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import brandedfoodobject as shared_brandedfoodobject


@dataclasses.dataclass
class GetFoodBrandedBarcodePhpQueryParams:
    code: str = dataclasses.field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFoodBrandedBarcodePhpSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetFoodBrandedBarcodePhpRequest:
    query_params: GetFoodBrandedBarcodePhpQueryParams = dataclasses.field()
    security: GetFoodBrandedBarcodePhpSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFoodBrandedBarcodePhpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    branded_food_object: Optional[shared_brandedfoodobject.BrandedFoodObject] = dataclasses.field(default=None)
    
