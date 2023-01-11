import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitytasktimeouttype_enum as shared_activitytasktimeouttype_enum


@dataclass_json
@dataclasses.dataclass
class ActivityTaskTimedOutEventAttributes:
    r"""ActivityTaskTimedOutEventAttributes
    Provides the details of the <code>ActivityTaskTimedOut</code> event.
    """
    
    scheduled_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timeout_type: shared_activitytasktimeouttype_enum.ActivityTaskTimeoutTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
