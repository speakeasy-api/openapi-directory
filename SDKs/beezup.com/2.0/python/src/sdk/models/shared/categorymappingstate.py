import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorymappingstatus_enum as shared_categorymappingstatus_enum


@dataclass_json
@dataclasses.dataclass
class CategoryMappingState:
    r"""CategoryMappingState
    The category mapping state of the channel catalog
    """
    
    status: Optional[shared_categorymappingstatus_enum.CategoryMappingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    uncategorized_product_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uncategorizedProductCount') }})
    without_category_cost_product_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withoutCategoryCostProductCount') }})
    
