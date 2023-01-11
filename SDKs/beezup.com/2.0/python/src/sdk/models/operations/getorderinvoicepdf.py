import dataclasses
from typing import Optional
from ..shared import getorderinvoicepdffromhtmlinvoiceurlrequest as shared_getorderinvoicepdffromhtmlinvoiceurlrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class GetOrderInvoicePdfRequest:
    request: shared_getorderinvoicepdffromhtmlinvoiceurlrequest.GetOrderInvoicePdfFromHTMLInvoiceURLRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrderInvoicePdfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    get_order_invoice_pdf_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
