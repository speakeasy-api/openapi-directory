import dataclasses
from typing import Optional
from ..shared import orderinvoicedesignsettings as shared_orderinvoicedesignsettings
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import errorresponsemessage as shared_errorresponsemessage
from ..shared import getorderinvoicedesignpreviewresponse as shared_getorderinvoicedesignpreviewresponse


@dataclasses.dataclass
class GetOrderInvoiceDesignSettingsPreviewHeaders:
    accept_encoding: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrderInvoiceDesignSettingsPreviewRequest:
    headers: GetOrderInvoiceDesignSettingsPreviewHeaders = dataclasses.field()
    request: shared_orderinvoicedesignsettings.OrderInvoiceDesignSettings = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOrderInvoiceDesignSettingsPreviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    error_response_message: Optional[shared_errorresponsemessage.ErrorResponseMessage] = dataclasses.field(default=None)
    get_order_invoice_design_preview_response: Optional[shared_getorderinvoicedesignpreviewresponse.GetOrderInvoiceDesignPreviewResponse] = dataclasses.field(default=None)
    
