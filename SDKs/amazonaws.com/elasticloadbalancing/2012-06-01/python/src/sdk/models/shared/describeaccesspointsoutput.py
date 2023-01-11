import dataclasses
from typing import Optional
from ..shared import loadbalancerdescription as shared_loadbalancerdescription


@dataclasses.dataclass
class DescribeAccessPointsOutput:
    r"""DescribeAccessPointsOutput
    Contains the parameters for DescribeLoadBalancers.
    """
    
    load_balancer_descriptions: Optional[list[shared_loadbalancerdescription.LoadBalancerDescription]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
