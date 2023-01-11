import dataclasses
from typing import Optional
from ..shared import listener as shared_listener


@dataclasses.dataclass
class ListenerDescription:
    r"""ListenerDescription
    The policies enabled for a listener.
    """
    
    listener: Optional[shared_listener.Listener] = dataclasses.field(default=None)
    policy_names: Optional[list[str]] = dataclasses.field(default=None)
    
