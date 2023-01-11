import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductRetrievePathParams:
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductRetrieveSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ProductRetrieveRequest:
    path_params: ProductRetrievePathParams = dataclasses.field()
    security: ProductRetrieveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductRetrieveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_retrieve_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    product_retrieve_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
