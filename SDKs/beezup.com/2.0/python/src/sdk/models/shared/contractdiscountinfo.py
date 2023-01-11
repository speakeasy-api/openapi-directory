import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import promotionalcodevalidity_enum as shared_promotionalcodevalidity_enum


@dataclass_json
@dataclasses.dataclass
class ContractDiscountInfo:
    r"""ContractDiscountInfo
    Describe the discount information related to the offer.
    """
    
    amount_code_promo_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountCodePromoDiscount') }})
    amount_code_promo_discount_per_month: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountCodePromoDiscountPerMonth') }})
    coupon_discount_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponDiscountCode') }})
    coupon_discount_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponDiscountId') }})
    customer_has_actual_discount: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerHasActualDiscount') }})
    discount_duration_in_month: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountDurationInMonth') }})
    is_coupon_discount_linked_to_coupon_offer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCouponDiscountLinkedToCouponOffer') }})
    percent_discount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentDiscount') }})
    promotional_code_validity: Optional[shared_promotionalcodevalidity_enum.PromotionalCodeValidityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionalCodeValidity') }})
    
