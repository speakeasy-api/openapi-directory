import dataclasses
from typing import Optional
from ..shared import orderlistrequest as shared_orderlistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage
from ..shared import orderlistfullwithlinks as shared_orderlistfullwithlinks


@dataclasses.dataclass
class GetOrderListFullV3Headers:
    accept_encoding: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderListFullV3Request:
    headers: GetOrderListFullV3Headers = dataclasses.field()
    request: shared_orderlistrequest.OrderListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrderListFullV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    order_list_full_with_links: Optional[shared_orderlistfullwithlinks.OrderListFullWithLinks] = dataclasses.field(default=None)
    
