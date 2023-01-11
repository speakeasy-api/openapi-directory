import dataclasses
from typing import Optional


@dataclasses.dataclass
class AvailabilityZoneList:
    r"""AvailabilityZoneList
    Specifies an Availability Zone.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
