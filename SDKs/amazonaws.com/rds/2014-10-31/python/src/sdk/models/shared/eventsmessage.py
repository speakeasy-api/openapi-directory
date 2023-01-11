import dataclasses
from typing import Optional
from ..shared import eventlist as shared_eventlist


@dataclasses.dataclass
class EventsMessage:
    r"""EventsMessage
     Contains the result of a successful invocation of the <code>DescribeEvents</code> action. 
    """
    
    events: Optional[list[shared_eventlist.EventList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
