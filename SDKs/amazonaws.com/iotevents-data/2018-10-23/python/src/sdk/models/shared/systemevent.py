import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtype_enum as shared_eventtype_enum
from ..shared import statechangeconfiguration as shared_statechangeconfiguration


@dataclass_json
@dataclasses.dataclass
class SystemEvent:
    r"""SystemEvent
    Contains information about alarm state changes.
    """
    
    event_type: Optional[shared_eventtype_enum.EventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    state_change_configuration: Optional[shared_statechangeconfiguration.StateChangeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeConfiguration') }})
    
