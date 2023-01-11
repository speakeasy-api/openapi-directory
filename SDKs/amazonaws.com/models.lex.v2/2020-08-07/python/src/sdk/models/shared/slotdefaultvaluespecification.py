import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slotdefaultvalue as shared_slotdefaultvalue


@dataclass_json
@dataclasses.dataclass
class SlotDefaultValueSpecification:
    r"""SlotDefaultValueSpecification
    Defines a list of values that Amazon Lex should use as the default value for a slot.
    """
    
    default_value_list: list[shared_slotdefaultvalue.SlotDefaultValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueList') }})
    
