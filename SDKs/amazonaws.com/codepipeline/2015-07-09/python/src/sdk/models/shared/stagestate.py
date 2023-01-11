import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionstate as shared_actionstate
from ..shared import stageexecution as shared_stageexecution
from ..shared import transitionstate as shared_transitionstate


@dataclass_json
@dataclasses.dataclass
class StageState:
    r"""StageState
    Represents information about the state of the stage.
    """
    
    action_states: Optional[list[shared_actionstate.ActionState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionStates') }})
    inbound_execution: Optional[shared_stageexecution.StageExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundExecution') }})
    inbound_transition_state: Optional[shared_transitionstate.TransitionState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundTransitionState') }})
    latest_execution: Optional[shared_stageexecution.StageExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestExecution') }})
    stage_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    
