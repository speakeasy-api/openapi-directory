import dataclasses
from typing import Optional
from ..shared import orderlistrequest as shared_orderlistrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage
from ..shared import orderlistlightwithlinks as shared_orderlistlightwithlinks


@dataclasses.dataclass
class GetOrderListLightV3Request:
    request: shared_orderlistrequest.OrderListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrderListLightV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    order_list_light_with_links: Optional[shared_orderlistlightwithlinks.OrderListLightWithLinks] = dataclasses.field(default=None)
    
