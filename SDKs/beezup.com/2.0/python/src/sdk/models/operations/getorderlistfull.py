import dataclasses
from typing import Optional
from ..shared import orderlistrequest as shared_orderlistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import orderlistfull as shared_orderlistfull


@dataclasses.dataclass
class GetOrderListFullHeaders:
    accept_encoding: list[str] = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderListFullRequest:
    headers: GetOrderListFullHeaders = dataclasses.field()
    request: shared_orderlistrequest.OrderListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrderListFullResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    order_list_full: Optional[shared_orderlistfull.OrderListFull] = dataclasses.field(default=None)
    
