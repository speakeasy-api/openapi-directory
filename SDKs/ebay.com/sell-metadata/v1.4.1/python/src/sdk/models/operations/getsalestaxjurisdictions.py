import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import salestaxjurisdictions as shared_salestaxjurisdictions


@dataclasses.dataclass
class GetSalesTaxJurisdictionsPathParams:
    country_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSalesTaxJurisdictionsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSalesTaxJurisdictionsRequest:
    path_params: GetSalesTaxJurisdictionsPathParams = dataclasses.field()
    security: GetSalesTaxJurisdictionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSalesTaxJurisdictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sales_tax_jurisdictions: Optional[shared_salestaxjurisdictions.SalesTaxJurisdictions] = dataclasses.field(default=None)
    
