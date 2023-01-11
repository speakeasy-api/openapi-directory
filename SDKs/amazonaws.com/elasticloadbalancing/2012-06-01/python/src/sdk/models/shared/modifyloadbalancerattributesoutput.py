import dataclasses
from typing import Optional
from ..shared import loadbalancerattributes as shared_loadbalancerattributes


@dataclasses.dataclass
class ModifyLoadBalancerAttributesOutput:
    r"""ModifyLoadBalancerAttributesOutput
    Contains the output of ModifyLoadBalancerAttributes.
    """
    
    load_balancer_attributes: Optional[shared_loadbalancerattributes.LoadBalancerAttributes] = dataclasses.field(default=None)
    load_balancer_name: Optional[str] = dataclasses.field(default=None)
    
