import dataclasses
from typing import Optional


@dataclasses.dataclass
class DistributionAlreadyExists:
    r"""DistributionAlreadyExists
    The caller reference you attempted to create the distribution with is associated with another distribution.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
