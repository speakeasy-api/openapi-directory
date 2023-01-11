import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import discountbenefit as shared_discountbenefit
from ..shared import inventorycriterion as shared_inventorycriterion


@dataclass_json
@dataclasses.dataclass
class SelectedInventoryDiscount:
    r"""SelectedInventoryDiscount
    This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
    """
    
    discount_benefit: Optional[shared_discountbenefit.DiscountBenefit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountBenefit') }})
    discount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountId') }})
    inventory_criterion: Optional[shared_inventorycriterion.InventoryCriterion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryCriterion') }})
    rule_order: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleOrder') }})
    
