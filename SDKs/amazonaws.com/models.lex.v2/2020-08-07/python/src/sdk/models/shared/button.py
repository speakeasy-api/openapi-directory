import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Button:
    r"""Button
    Describes a button to use on a response card used to gather slot values from a user.
    """
    
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
