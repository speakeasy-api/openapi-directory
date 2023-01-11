import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventparameters as shared_eventparameters
from ..shared import eventsourcevalues_enum as shared_eventsourcevalues_enum


@dataclass_json
@dataclasses.dataclass
class EventSource:
    r"""EventSource
    Specifies an event that triggers an event-based policy.
    """
    
    type: shared_eventsourcevalues_enum.EventSourceValuesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    parameters: Optional[shared_eventparameters.EventParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
