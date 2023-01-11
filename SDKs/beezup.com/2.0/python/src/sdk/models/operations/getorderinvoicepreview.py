import dataclasses
from typing import Optional
from ..shared import previeworderinvoicerequest as shared_previeworderinvoicerequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage
from ..shared import previeworderinvoiceresponse as shared_previeworderinvoiceresponse


@dataclasses.dataclass
class GetOrderInvoicePreviewPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    beez_up_order_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'beezUPOrderUUID', 'style': 'simple', 'explode': False }})
    marketplace_technical_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplaceTechnicalCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderInvoicePreviewHeaders:
    accept_encoding: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderInvoicePreviewRequest:
    headers: GetOrderInvoicePreviewHeaders = dataclasses.field()
    path_params: GetOrderInvoicePreviewPathParams = dataclasses.field()
    request: shared_previeworderinvoicerequest.PreviewOrderInvoiceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrderInvoicePreviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    preview_order_invoice_response: Optional[shared_previeworderinvoiceresponse.PreviewOrderInvoiceResponse] = dataclasses.field(default=None)
    
