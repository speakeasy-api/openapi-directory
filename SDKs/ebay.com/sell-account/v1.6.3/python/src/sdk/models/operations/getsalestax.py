import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import salestax as shared_salestax


@dataclasses.dataclass
class GetSalesTaxPathParams:
    country_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSalesTaxSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSalesTaxRequest:
    path_params: GetSalesTaxPathParams = dataclasses.field()
    security: GetSalesTaxSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSalesTaxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sales_tax: Optional[shared_salestax.SalesTax] = dataclasses.field(default=None)
    
