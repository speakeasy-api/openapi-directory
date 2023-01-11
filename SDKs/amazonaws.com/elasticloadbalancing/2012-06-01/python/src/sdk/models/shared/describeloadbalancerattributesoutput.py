import dataclasses
from typing import Optional
from ..shared import loadbalancerattributes as shared_loadbalancerattributes


@dataclasses.dataclass
class DescribeLoadBalancerAttributesOutput:
    r"""DescribeLoadBalancerAttributesOutput
    Contains the output of DescribeLoadBalancerAttributes.
    """
    
    load_balancer_attributes: Optional[shared_loadbalancerattributes.LoadBalancerAttributes] = dataclasses.field(default=None)
    
