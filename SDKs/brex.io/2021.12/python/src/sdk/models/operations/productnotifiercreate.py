import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductNotifierCreatePathParams:
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    uri: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uri', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductNotifierCreateSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductNotifierCreateRequest:
    path_params: ProductNotifierCreatePathParams = dataclasses.field()
    security: ProductNotifierCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductNotifierCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_notifier_create_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    product_notifier_create_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
