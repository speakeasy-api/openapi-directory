import dataclasses
from typing import Optional


@dataclasses.dataclass
class LoadBalancerAddress:
    r"""LoadBalancerAddress
    Information about a static IP address for a load balancer.
    """
    
    allocation_id: Optional[str] = dataclasses.field(default=None)
    i_pv6_address: Optional[str] = dataclasses.field(default=None)
    ip_address: Optional[str] = dataclasses.field(default=None)
    private_i_pv4_address: Optional[str] = dataclasses.field(default=None)
    
