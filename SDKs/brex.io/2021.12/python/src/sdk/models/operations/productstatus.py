import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductStatusPathParams:
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductStatusSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductStatusRequest:
    path_params: ProductStatusPathParams = dataclasses.field()
    security: ProductStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_status_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_status_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
