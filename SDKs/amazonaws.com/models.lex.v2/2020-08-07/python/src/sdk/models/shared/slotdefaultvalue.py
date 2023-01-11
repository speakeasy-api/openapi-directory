import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SlotDefaultValue:
    r"""SlotDefaultValue
    Specifies the default value to use when a user doesn't provide a value for a slot.
    """
    
    default_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    
