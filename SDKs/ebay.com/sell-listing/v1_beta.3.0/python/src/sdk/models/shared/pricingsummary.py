import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class PricingSummary:
    r"""PricingSummary
    The type that defines the fields for the price details for an item.
    """
    
    auction_reserve_price: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionReservePrice') }})
    auction_start_price: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionStartPrice') }})
    price: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
