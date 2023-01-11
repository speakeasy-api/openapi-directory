import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action


@dataclass_json
@dataclasses.dataclass
class TransitionEvent:
    r"""TransitionEvent
    Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.
    """
    
    condition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    event_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    next_state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextState') }})
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    
