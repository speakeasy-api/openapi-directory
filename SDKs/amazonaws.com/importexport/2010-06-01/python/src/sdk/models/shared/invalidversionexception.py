import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidVersionException:
    r"""InvalidVersionException
    The client tool version is invalid.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
