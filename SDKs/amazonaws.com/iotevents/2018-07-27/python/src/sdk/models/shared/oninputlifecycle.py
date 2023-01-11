import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event
from ..shared import transitionevent as shared_transitionevent


@dataclass_json
@dataclasses.dataclass
class OnInputLifecycle:
    r"""OnInputLifecycle
    Specifies the actions performed when the <code>condition</code> evaluates to TRUE.
    """
    
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    transition_events: Optional[list[shared_transitionevent.TransitionEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionEvents') }})
    
