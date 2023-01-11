import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import amount as shared_amount


@dataclass_json
@dataclasses.dataclass
class SelectionRule:
    r"""SelectionRule
    This type specifies the selection rules used to create a campaign.
    """
    
    brands: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brands') }})
    category_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryIds') }})
    category_scope: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryScope') }})
    listing_condition_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingConditionIds') }})
    max_price: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPrice') }})
    min_price: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPrice') }})
    
