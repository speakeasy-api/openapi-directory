import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventoryitem as shared_inventoryitem
from ..shared import selectionrule as shared_selectionrule


@dataclass_json
@dataclasses.dataclass
class RuleCriteria:
    r"""RuleCriteria
    This type defines the fields for a set of inventory selection rules. Required: When inventoryCriterionType is set to INVENTORY_BY_RULE or INVENTORY_ANY.
    """
    
    exclude_inventory_items: Optional[list[shared_inventoryitem.InventoryItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeInventoryItems') }})
    exclude_listing_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeListingIds') }})
    markup_inventory_items: Optional[list[shared_inventoryitem.InventoryItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markupInventoryItems') }})
    markup_listing_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markupListingIds') }})
    selection_rules: Optional[list[shared_selectionrule.SelectionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionRules') }})
    
