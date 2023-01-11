import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimerDefinition:
    r"""TimerDefinition
    The new setting of a timer.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
