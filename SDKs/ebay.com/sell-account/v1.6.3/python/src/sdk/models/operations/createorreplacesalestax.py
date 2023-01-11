import dataclasses
from ..shared import security as shared_security
from ..shared import salestaxbase as shared_salestaxbase


@dataclasses.dataclass
class CreateOrReplaceSalesTaxPathParams:
    country_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateOrReplaceSalesTaxSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateOrReplaceSalesTaxRequest:
    path_params: CreateOrReplaceSalesTaxPathParams = dataclasses.field()
    request: shared_salestaxbase.SalesTaxBase = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateOrReplaceSalesTaxSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateOrReplaceSalesTaxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
