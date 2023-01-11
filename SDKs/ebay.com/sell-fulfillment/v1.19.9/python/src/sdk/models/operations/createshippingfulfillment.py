import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import shippingfulfillmentdetails as shared_shippingfulfillmentdetails


@dataclasses.dataclass
class CreateShippingFulfillmentPathParams:
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateShippingFulfillmentSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateShippingFulfillmentRequest:
    path_params: CreateShippingFulfillmentPathParams = dataclasses.field()
    request: shared_shippingfulfillmentdetails.ShippingFulfillmentDetails = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateShippingFulfillmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateShippingFulfillmentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_shipping_fulfillment_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
