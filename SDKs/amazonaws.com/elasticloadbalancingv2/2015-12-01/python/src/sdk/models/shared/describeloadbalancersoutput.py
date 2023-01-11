import dataclasses
from typing import Optional
from ..shared import loadbalancer as shared_loadbalancer


@dataclasses.dataclass
class DescribeLoadBalancersOutput:
    load_balancers: Optional[list[shared_loadbalancer.LoadBalancer]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
