import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BuiltInSlotTypeSummary:
    r"""BuiltInSlotTypeSummary
    Provides summary information about a built-in slot type for the <a>ListBuiltInSlotTypes</a> operation.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    slot_type_signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeSignature') }})
    
