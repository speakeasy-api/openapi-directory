import dataclasses
from typing import Optional


@dataclasses.dataclass
class LoadBalancerState:
    r"""LoadBalancerState
    Describes the state of a Classic Load Balancer.
    """
    
    load_balancer_name: Optional[str] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    
