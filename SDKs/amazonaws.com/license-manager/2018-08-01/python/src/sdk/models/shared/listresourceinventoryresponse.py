import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceinventory as shared_resourceinventory


@dataclass_json
@dataclasses.dataclass
class ListResourceInventoryResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_inventory_list: Optional[list[shared_resourceinventory.ResourceInventory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceInventoryList') }})
    
