import dataclasses
from typing import Optional


@dataclasses.dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Information about an Availability Zone.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
