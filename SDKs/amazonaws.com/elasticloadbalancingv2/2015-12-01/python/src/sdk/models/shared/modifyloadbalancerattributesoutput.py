import dataclasses
from typing import Optional
from ..shared import loadbalancerattribute as shared_loadbalancerattribute


@dataclasses.dataclass
class ModifyLoadBalancerAttributesOutput:
    attributes: Optional[list[shared_loadbalancerattribute.LoadBalancerAttribute]] = dataclasses.field(default=None)
    
