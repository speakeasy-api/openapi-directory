import dataclasses
from typing import Optional


@dataclasses.dataclass
class RemoveAvailabilityZonesOutput:
    r"""RemoveAvailabilityZonesOutput
    Contains the output for DisableAvailabilityZonesForLoadBalancer.
    """
    
    availability_zones: Optional[list[str]] = dataclasses.field(default=None)
    
