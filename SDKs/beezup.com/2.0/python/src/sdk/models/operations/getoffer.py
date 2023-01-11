import dataclasses
from typing import Optional
from ..shared import offerrequest as shared_offerrequest
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import offer as shared_offer


@dataclasses.dataclass
class GetOfferRequest:
    request: shared_offerrequest.OfferRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetOfferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    offer: Optional[shared_offer.Offer] = dataclasses.field(default=None)
    
