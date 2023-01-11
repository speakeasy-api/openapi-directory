import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteInstanceEventWindowResultInstanceEventWindowState:
    r"""DeleteInstanceEventWindowResultInstanceEventWindowState
    The state of the event window.
    """
    
    instance_event_window_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteInstanceEventWindowResult:
    instance_event_window_state: Optional[DeleteInstanceEventWindowResultInstanceEventWindowState] = dataclasses.field(default=None)
    
