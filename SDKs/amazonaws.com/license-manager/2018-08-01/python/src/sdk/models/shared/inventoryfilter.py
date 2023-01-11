import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventoryfiltercondition_enum as shared_inventoryfiltercondition_enum


@dataclass_json
@dataclasses.dataclass
class InventoryFilter:
    r"""InventoryFilter
    An inventory filter.
    """
    
    condition: shared_inventoryfiltercondition_enum.InventoryFilterConditionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
