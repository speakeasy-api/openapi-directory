import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import shippingfulfillmentpagedcollection as shared_shippingfulfillmentpagedcollection


@dataclasses.dataclass
class GetShippingFulfillmentsPathParams:
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShippingFulfillmentsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetShippingFulfillmentsRequest:
    path_params: GetShippingFulfillmentsPathParams = dataclasses.field()
    security: GetShippingFulfillmentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShippingFulfillmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    shipping_fulfillment_paged_collection: Optional[shared_shippingfulfillmentpagedcollection.ShippingFulfillmentPagedCollection] = dataclasses.field(default=None)
    
