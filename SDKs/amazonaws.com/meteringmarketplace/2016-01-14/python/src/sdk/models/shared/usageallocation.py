import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class UsageAllocation:
    r"""UsageAllocation
    <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each UsageAllocation indicates the usage quantity for a specific set of tags.</p>
    """
    
    allocated_usage_quantity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocatedUsageQuantity') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
