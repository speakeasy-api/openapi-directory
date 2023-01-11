import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import salestaxes as shared_salestaxes


@dataclasses.dataclass
class GetSalesTaxesQueryParams:
    country_code: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country_code', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSalesTaxesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetSalesTaxesRequest:
    query_params: GetSalesTaxesQueryParams = dataclasses.field()
    security: GetSalesTaxesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSalesTaxesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sales_taxes: Optional[shared_salestaxes.SalesTaxes] = dataclasses.field(default=None)
    
