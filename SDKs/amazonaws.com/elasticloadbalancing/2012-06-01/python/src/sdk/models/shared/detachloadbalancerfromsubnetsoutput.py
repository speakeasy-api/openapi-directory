import dataclasses
from typing import Optional


@dataclasses.dataclass
class DetachLoadBalancerFromSubnetsOutput:
    r"""DetachLoadBalancerFromSubnetsOutput
    Contains the output of DetachLoadBalancerFromSubnets.
    """
    
    subnets: Optional[list[str]] = dataclasses.field(default=None)
    
