import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventfilter as shared_eventfilter


@dataclass_json
@dataclasses.dataclass
class EventStartCondition:
    r"""EventStartCondition
    Specifies the settings for an event that causes a journey activity to start.
    """
    
    event_filter: Optional[shared_eventfilter.EventFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFilter') }})
    segment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    
