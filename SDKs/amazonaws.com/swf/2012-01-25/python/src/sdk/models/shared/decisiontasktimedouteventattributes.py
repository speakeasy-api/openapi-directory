import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import decisiontasktimeouttype_enum as shared_decisiontasktimeouttype_enum


@dataclass_json
@dataclasses.dataclass
class DecisionTaskTimedOutEventAttributes:
    r"""DecisionTaskTimedOutEventAttributes
    Provides the details of the <code>DecisionTaskTimedOut</code> event.
    """
    
    scheduled_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timeout_type: shared_decisiontasktimeouttype_enum.DecisionTaskTimeoutTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    
