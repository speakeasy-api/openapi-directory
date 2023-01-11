import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import standardoffers as shared_standardoffers


@dataclasses.dataclass
class GetStandardOffersHeaders:
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStandardOffersRequest:
    headers: GetStandardOffersHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetStandardOffersResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    standard_offers: Optional[shared_standardoffers.StandardOffers] = dataclasses.field(default=None)
    
