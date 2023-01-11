import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import product as shared_product


@dataclasses.dataclass
class GetProductPathParams:
    epid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'epid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetProductRequest:
    path_params: GetProductPathParams = dataclasses.field()
    security: GetProductSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product: Optional[shared_product.Product] = dataclasses.field(default=None)
    
