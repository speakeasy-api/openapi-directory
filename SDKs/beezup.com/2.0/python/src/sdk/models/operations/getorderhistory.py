import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import orderhistory as shared_orderhistory


@dataclasses.dataclass
class GetOrderHistoryPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    beez_up_order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'beezUPOrderId', 'style': 'simple', 'explode': False }})
    marketplace_technical_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplaceTechnicalCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderHistoryHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderHistoryRequest:
    headers: GetOrderHistoryHeaders = dataclasses.field()
    path_params: GetOrderHistoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrderHistoryResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    order_history: Optional[shared_orderhistory.OrderHistory] = dataclasses.field(default=None)
    
