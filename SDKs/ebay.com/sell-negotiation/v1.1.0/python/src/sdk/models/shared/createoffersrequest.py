import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeduration as shared_timeduration
from ..shared import offereditem as shared_offereditem


@dataclass_json
@dataclasses.dataclass
class CreateOffersRequest:
    r"""CreateOffersRequest
    This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.
    """
    
    allow_counter_offer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCounterOffer') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    offer_duration: Optional[shared_timeduration.TimeDuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerDuration') }})
    offered_items: Optional[list[shared_offereditem.OfferedItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeredItems') }})
    
