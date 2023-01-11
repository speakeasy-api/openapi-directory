import dataclasses
from typing import Optional


@dataclasses.dataclass
class AddAvailabilityZonesOutput:
    r"""AddAvailabilityZonesOutput
    Contains the output of EnableAvailabilityZonesForLoadBalancer.
    """
    
    availability_zones: Optional[list[str]] = dataclasses.field(default=None)
    
