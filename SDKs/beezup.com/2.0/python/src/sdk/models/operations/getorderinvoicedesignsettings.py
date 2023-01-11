import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage
from ..shared import orderinvoicedesignsettings as shared_orderinvoicedesignsettings


@dataclasses.dataclass
class GetOrderInvoiceDesignSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    order_invoice_design_settings: Optional[shared_orderinvoicedesignsettings.OrderInvoiceDesignSettings] = dataclasses.field(default=None)
    
