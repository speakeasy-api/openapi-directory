import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action


@dataclass_json
@dataclasses.dataclass
class Event:
    r"""Event
    Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.
    """
    
    event_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    condition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    
