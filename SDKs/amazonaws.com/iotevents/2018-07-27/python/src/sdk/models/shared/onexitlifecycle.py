import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclass_json
@dataclasses.dataclass
class OnExitLifecycle:
    r"""OnExitLifecycle
    When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.
    """
    
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    
