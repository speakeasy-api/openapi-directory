import dataclasses
from typing import Optional


@dataclasses.dataclass
class ApplySecurityGroupsToLoadBalancerOutput:
    r"""ApplySecurityGroupsToLoadBalancerOutput
    Contains the output of ApplySecurityGroupsToLoadBalancer.
    """
    
    security_groups: Optional[list[str]] = dataclasses.field(default=None)
    
