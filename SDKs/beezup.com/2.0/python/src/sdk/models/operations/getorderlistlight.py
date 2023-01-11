import dataclasses
from typing import Optional
from ..shared import orderlistrequest as shared_orderlistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import orderlistlight as shared_orderlistlight


@dataclasses.dataclass
class GetOrderListLightRequest:
    request: shared_orderlistrequest.OrderListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrderListLightResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    order_list_light: Optional[shared_orderlistlight.OrderListLight] = dataclasses.field(default=None)
    
