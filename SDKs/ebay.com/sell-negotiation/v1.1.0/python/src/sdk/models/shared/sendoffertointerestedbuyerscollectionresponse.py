import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offer as shared_offer


@dataclass_json
@dataclasses.dataclass
class SendOfferToInterestedBuyersCollectionResponse:
    r"""SendOfferToInterestedBuyersCollectionResponse
    The response object returned from a SendOfferToInterestedBuyers request.
    """
    
    offers: Optional[list[shared_offer.Offer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offers') }})
    
