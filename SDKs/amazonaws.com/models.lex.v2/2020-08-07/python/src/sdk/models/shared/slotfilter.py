import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slotfiltername_enum as shared_slotfiltername_enum
from ..shared import slotfilteroperator_enum as shared_slotfilteroperator_enum


@dataclass_json
@dataclasses.dataclass
class SlotFilter:
    r"""SlotFilter
    Filters the response from the <code>ListSlots</code> operation.
    """
    
    name: shared_slotfiltername_enum.SlotFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: shared_slotfilteroperator_enum.SlotFilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
