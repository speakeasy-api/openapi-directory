import dataclasses
from typing import Optional


@dataclasses.dataclass
class ConnectionDraining:
    r"""ConnectionDraining
    Information about the <code>ConnectionDraining</code> attribute.
    """
    
    enabled: bool = dataclasses.field()
    timeout: Optional[int] = dataclasses.field(default=None)
    
