import dataclasses
from typing import Optional
from ..shared import loadbalancerstate as shared_loadbalancerstate


@dataclasses.dataclass
class DescribeLoadBalancersResponse:
    load_balancers: Optional[list[shared_loadbalancerstate.LoadBalancerState]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
