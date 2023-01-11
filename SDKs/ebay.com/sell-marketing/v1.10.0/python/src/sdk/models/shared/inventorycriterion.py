import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventoryitem as shared_inventoryitem
from ..shared import rulecriteria as shared_rulecriteria


@dataclass_json
@dataclasses.dataclass
class InventoryCriterion:
    r"""InventoryCriterion
    This type defines either the selections rules or the list of listing IDs for the promotion. The &quot;listing IDs&quot; are are either the seller's item IDs or the eBay listing IDs.
    """
    
    inventory_criterion_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryCriterionType') }})
    inventory_items: Optional[list[shared_inventoryitem.InventoryItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryItems') }})
    listing_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingIds') }})
    rule_criteria: Optional[shared_rulecriteria.RuleCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleCriteria') }})
    
