import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchDomain:
    r"""NoSuchDomain
    The specified domain does not exist.
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
