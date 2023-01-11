import dataclasses
from typing import Optional


@dataclasses.dataclass
class ExpiredJobIDException:
    r"""ExpiredJobIDException
    Indicates that the specified job has expired out of the system.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
