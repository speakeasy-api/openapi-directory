import dataclasses
from typing import Optional
from ..shared import eventdescription as shared_eventdescription


@dataclasses.dataclass
class EventDescriptionsMessage:
    r"""EventDescriptionsMessage
    Result message wrapping a list of event descriptions.
    """
    
    events: Optional[list[shared_eventdescription.EventDescription]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
