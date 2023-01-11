import dataclasses
from typing import Optional
from ..shared import loadbalancertargetgroupstate as shared_loadbalancertargetgroupstate


@dataclasses.dataclass
class DescribeLoadBalancerTargetGroupsResponse:
    load_balancer_target_groups: Optional[list[shared_loadbalancertargetgroupstate.LoadBalancerTargetGroupState]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
