import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class HarvestAccountPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    marketplace_technical_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplaceTechnicalCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class HarvestAccountQueryParams:
    beez_up_order_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'beezUPOrderId', 'style': 'form', 'explode': True }})
    marketplace_order_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'marketplaceOrderId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class HarvestAccountRequest:
    path_params: HarvestAccountPathParams = dataclasses.field()
    query_params: HarvestAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class HarvestAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
