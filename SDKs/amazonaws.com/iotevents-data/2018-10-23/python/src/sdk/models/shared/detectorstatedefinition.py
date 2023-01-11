import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timerdefinition as shared_timerdefinition
from ..shared import variabledefinition as shared_variabledefinition


@dataclass_json
@dataclasses.dataclass
class DetectorStateDefinition:
    r"""DetectorStateDefinition
    The new state, variable values, and timer settings of the detector (instance).
    """
    
    state_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateName') }})
    timers: list[shared_timerdefinition.TimerDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timers') }})
    variables: list[shared_variabledefinition.VariableDefinition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    
