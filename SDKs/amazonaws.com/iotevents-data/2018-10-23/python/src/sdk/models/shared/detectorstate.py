import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timer as shared_timer
from ..shared import variable as shared_variable


@dataclass_json
@dataclasses.dataclass
class DetectorState:
    r"""DetectorState
    Information about the current state of the detector instance.
    """
    
    state_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateName') }})
    timers: list[shared_timer.Timer] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timers') }})
    variables: list[shared_variable.Variable] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
