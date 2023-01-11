import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slottypefiltername_enum as shared_slottypefiltername_enum
from ..shared import slottypefilteroperator_enum as shared_slottypefilteroperator_enum


@dataclass_json
@dataclasses.dataclass
class SlotTypeFilter:
    r"""SlotTypeFilter
    Filters the response from the <code>ListSlotTypes</code> operation.
    """
    
    name: shared_slottypefiltername_enum.SlotTypeFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: shared_slottypefilteroperator_enum.SlotTypeFilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
