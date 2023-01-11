import dataclasses
from typing import Optional


@dataclasses.dataclass
class AvailabilityZoneList:
    r"""AvailabilityZoneList
    Information about an Availability Zone.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
