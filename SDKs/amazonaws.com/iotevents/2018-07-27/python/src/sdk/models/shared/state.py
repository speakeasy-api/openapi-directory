import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onenterlifecycle as shared_onenterlifecycle
from ..shared import onexitlifecycle as shared_onexitlifecycle
from ..shared import oninputlifecycle as shared_oninputlifecycle


@dataclass_json
@dataclasses.dataclass
class State:
    r"""State
    Information that defines a state of a detector.
    """
    
    state_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateName') }})
    on_enter: Optional[shared_onenterlifecycle.OnEnterLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onEnter') }})
    on_exit: Optional[shared_onexitlifecycle.OnExitLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onExit') }})
    on_input: Optional[shared_oninputlifecycle.OnInputLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onInput') }})
    
