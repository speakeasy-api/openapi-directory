import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclass_json
@dataclasses.dataclass
class OnEnterLifecycle:
    r"""OnEnterLifecycle
    When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.
    """
    
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    
