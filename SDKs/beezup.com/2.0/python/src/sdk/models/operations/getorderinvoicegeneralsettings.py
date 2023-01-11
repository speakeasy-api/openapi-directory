import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage
from ..shared import getorderinvoicegeneralsettingsresponse as shared_getorderinvoicegeneralsettingsresponse


@dataclasses.dataclass
class GetOrderInvoiceGeneralSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    get_order_invoice_general_settings_response: Optional[shared_getorderinvoicegeneralsettingsresponse.GetOrderInvoiceGeneralSettingsResponse] = dataclasses.field(default=None)
    
