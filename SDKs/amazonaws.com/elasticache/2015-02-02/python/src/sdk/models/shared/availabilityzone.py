import dataclasses
from typing import Optional


@dataclasses.dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Describes an Availability Zone in which the cluster is launched.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
