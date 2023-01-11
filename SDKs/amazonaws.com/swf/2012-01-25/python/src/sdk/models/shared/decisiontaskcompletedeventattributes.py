import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DecisionTaskCompletedEventAttributes:
    r"""DecisionTaskCompletedEventAttributes
    Provides the details of the <code>DecisionTaskCompleted</code> event.
    """
    
    scheduled_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    execution_context: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionContext') }})
    
