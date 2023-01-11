import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import discountbenefit as shared_discountbenefit
from ..shared import discountspecification as shared_discountspecification
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class DiscountRule:
    r"""DiscountRule
    This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. Set the amount of the discount and the rules that govern when the discount triggers using the discountBenefit and discountSpecification fields. Note: In volume pricing promotions, you must configure at least two discountRule containers and at most four.
    """
    
    discount_benefit: Optional[shared_discountbenefit.DiscountBenefit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountBenefit') }})
    discount_specification: Optional[shared_discountspecification.DiscountSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountSpecification') }})
    max_discount_amount: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDiscountAmount') }})
    rule_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleOrder') }})
    
