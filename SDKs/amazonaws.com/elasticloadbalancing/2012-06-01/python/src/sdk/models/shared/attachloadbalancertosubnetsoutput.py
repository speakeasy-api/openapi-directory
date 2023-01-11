import dataclasses
from typing import Optional


@dataclasses.dataclass
class AttachLoadBalancerToSubnetsOutput:
    r"""AttachLoadBalancerToSubnetsOutput
    Contains the output of AttachLoadBalancerToSubnets.
    """
    
    subnets: Optional[list[str]] = dataclasses.field(default=None)
    
