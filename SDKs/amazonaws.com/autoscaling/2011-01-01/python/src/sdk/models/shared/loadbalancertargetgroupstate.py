import dataclasses
from typing import Optional


@dataclasses.dataclass
class LoadBalancerTargetGroupState:
    r"""LoadBalancerTargetGroupState
    Describes the state of a target group.
    """
    
    load_balancer_target_group_arn: Optional[str] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    
