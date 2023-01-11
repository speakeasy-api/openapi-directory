import dataclasses
from typing import Optional


@dataclasses.dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Specifies an Availability Zone.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
