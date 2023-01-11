import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchDistribution:
    r"""NoSuchDistribution
    The specified distribution does not exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
