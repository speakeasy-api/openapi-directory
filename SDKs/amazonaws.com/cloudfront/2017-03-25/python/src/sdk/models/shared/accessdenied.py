import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessDenied:
    r"""AccessDenied
    Access denied.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
