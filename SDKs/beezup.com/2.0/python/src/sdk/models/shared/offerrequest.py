import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OfferRequest:
    billing_period_in_month: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodInMonth') }})
    offer_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    store_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCount') }})
    coupon_discount_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponDiscountCode') }})
    coupon_offer_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponOfferCode') }})
    
