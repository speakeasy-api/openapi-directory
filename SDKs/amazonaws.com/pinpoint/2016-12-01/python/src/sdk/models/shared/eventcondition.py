import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventdimensions as shared_eventdimensions


@dataclass_json
@dataclasses.dataclass
class EventCondition:
    r"""EventCondition
    Specifies the conditions to evaluate for an event that applies to an activity in a journey.
    """
    
    dimensions: Optional[shared_eventdimensions.EventDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    message_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageActivity') }})
    
