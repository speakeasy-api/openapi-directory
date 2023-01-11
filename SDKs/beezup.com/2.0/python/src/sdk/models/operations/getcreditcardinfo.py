import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import creditcardinforesponse as shared_creditcardinforesponse


@dataclasses.dataclass
class GetCreditCardInfoHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreditCardInfoRequest:
    headers: GetCreditCardInfoHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetCreditCardInfoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    credit_card_info_response: Optional[shared_creditcardinforesponse.CreditCardInfoResponse] = dataclasses.field(default=None)
    
