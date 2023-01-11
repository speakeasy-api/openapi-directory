import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteSalesTaxPathParams:
    country_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryCode', 'style': 'simple', 'explode': False }})
    jurisdiction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'jurisdictionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSalesTaxSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteSalesTaxRequest:
    path_params: DeleteSalesTaxPathParams = dataclasses.field()
    security: DeleteSalesTaxSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSalesTaxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
