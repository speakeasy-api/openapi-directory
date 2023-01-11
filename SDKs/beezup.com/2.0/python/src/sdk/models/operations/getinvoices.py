import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import invoicelist as shared_invoicelist


@dataclasses.dataclass
class GetInvoicesHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoicesRequest:
    headers: GetInvoicesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoicesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    invoice_list: Optional[shared_invoicelist.InvoiceList] = dataclasses.field(default=None)
    
