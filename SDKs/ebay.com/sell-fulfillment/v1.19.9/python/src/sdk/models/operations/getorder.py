import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import order as shared_order


@dataclasses.dataclass
class GetOrderPathParams:
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderQueryParams:
    field_groups: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fieldGroups', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrderSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetOrderRequest:
    path_params: GetOrderPathParams = dataclasses.field()
    query_params: GetOrderQueryParams = dataclasses.field()
    security: GetOrderSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order: Optional[shared_order.Order] = dataclasses.field(default=None)
    
