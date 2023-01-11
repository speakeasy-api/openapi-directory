import dataclasses
from typing import Optional
from enum import Enum
from ..shared import loadbalancerstateenum_enum as shared_loadbalancerstateenum_enum


@dataclasses.dataclass
class LoadBalancerState:
    r"""LoadBalancerState
    Information about the state of the load balancer.
    """
    
    code: Optional[shared_loadbalancerstateenum_enum.LoadBalancerStateEnumEnum] = dataclasses.field(default=None)
    reason: Optional[str] = dataclasses.field(default=None)
    
