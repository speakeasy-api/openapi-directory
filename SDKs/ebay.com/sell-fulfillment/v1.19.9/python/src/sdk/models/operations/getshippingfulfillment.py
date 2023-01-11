import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import shippingfulfillment as shared_shippingfulfillment


@dataclasses.dataclass
class GetShippingFulfillmentPathParams:
    fulfillment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fulfillmentId', 'style': 'simple', 'explode': False }})
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShippingFulfillmentSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetShippingFulfillmentRequest:
    path_params: GetShippingFulfillmentPathParams = dataclasses.field()
    security: GetShippingFulfillmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShippingFulfillmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    shipping_fulfillment: Optional[shared_shippingfulfillment.ShippingFulfillment] = dataclasses.field(default=None)
    
