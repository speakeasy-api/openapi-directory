import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute


@dataclass_json
@dataclasses.dataclass
class InputDefinition:
    r"""InputDefinition
    The definition of the input.
    """
    
    attributes: list[shared_attribute.Attribute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    
