import dataclasses
from typing import Optional
from ..shared import orderinvoicegeneralsettings as shared_orderinvoicegeneralsettings
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage


@dataclasses.dataclass
class SaveOrderInvoiceGeneralSettingsRequest:
    request: shared_orderinvoicegeneralsettings.OrderInvoiceGeneralSettings = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SaveOrderInvoiceGeneralSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    
