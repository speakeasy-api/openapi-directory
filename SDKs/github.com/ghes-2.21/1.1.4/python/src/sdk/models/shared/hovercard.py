import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HovercardContexts:
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    octicon: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('octicon') }})
    

@dataclass_json
@dataclasses.dataclass
class Hovercard:
    r"""Hovercard
    Hovercard
    """
    
    contexts: list[HovercardContexts] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    
