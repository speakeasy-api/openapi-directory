import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CouponConfiguration:
    r"""CouponConfiguration
    This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.
    """
    
    coupon_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponCode') }})
    coupon_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponType') }})
    max_coupon_redemption_per_user: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCouponRedemptionPerUser') }})
    
