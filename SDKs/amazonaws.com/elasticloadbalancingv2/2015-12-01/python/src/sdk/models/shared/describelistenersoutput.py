import dataclasses
from typing import Optional
from ..shared import listener as shared_listener


@dataclasses.dataclass
class DescribeListenersOutput:
    listeners: Optional[list[shared_listener.Listener]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
