import dataclasses
from typing import Optional
from ..shared import orderdetail as shared_orderdetail


@dataclasses.dataclass
class GetV3OrdersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3OrdersIDHeaders:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV3OrdersIDRequest:
    headers: GetV3OrdersIDHeaders = dataclasses.field()
    path_params: GetV3OrdersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV3OrdersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order_detail: Optional[shared_orderdetail.OrderDetail] = dataclasses.field(default=None)
    
