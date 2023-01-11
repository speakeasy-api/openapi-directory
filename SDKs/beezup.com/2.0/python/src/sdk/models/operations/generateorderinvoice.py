import dataclasses
from typing import Optional
from ..shared import generateorderinvoicerequest as shared_generateorderinvoicerequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class GenerateOrderInvoicePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    beez_up_order_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'beezUPOrderUUID', 'style': 'simple', 'explode': False }})
    marketplace_technical_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplaceTechnicalCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenerateOrderInvoiceQueryParams:
    user_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GenerateOrderInvoiceRequest:
    path_params: GenerateOrderInvoicePathParams = dataclasses.field()
    query_params: GenerateOrderInvoiceQueryParams = dataclasses.field()
    request: shared_generateorderinvoicerequest.GenerateOrderInvoiceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GenerateOrderInvoiceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
