import dataclasses
from typing import Optional
from ..shared import loadbalancer as shared_loadbalancer


@dataclasses.dataclass
class CreateLoadBalancerOutput:
    load_balancers: Optional[list[shared_loadbalancer.LoadBalancer]] = dataclasses.field(default=None)
    
