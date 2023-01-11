import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import state as shared_state


@dataclass_json
@dataclasses.dataclass
class DetectorModelDefinition:
    r"""DetectorModelDefinition
    Information that defines how a detector operates.
    """
    
    initial_state_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialStateName') }})
    states: list[shared_state.State] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('states') }})
    
