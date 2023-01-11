import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchStreamingDistribution:
    r"""NoSuchStreamingDistribution
    The specified streaming distribution does not exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
