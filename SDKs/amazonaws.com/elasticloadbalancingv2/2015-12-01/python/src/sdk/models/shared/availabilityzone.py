import dataclasses
from typing import Optional
from ..shared import loadbalanceraddress as shared_loadbalanceraddress


@dataclasses.dataclass
class AvailabilityZone:
    r"""AvailabilityZone
    Information about an Availability Zone.
    """
    
    load_balancer_addresses: Optional[list[shared_loadbalanceraddress.LoadBalancerAddress]] = dataclasses.field(default=None)
    outpost_id: Optional[str] = dataclasses.field(default=None)
    subnet_id: Optional[str] = dataclasses.field(default=None)
    zone_name: Optional[str] = dataclasses.field(default=None)
    
