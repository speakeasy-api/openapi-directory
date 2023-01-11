import dataclasses
from typing import Optional


@dataclasses.dataclass
class LoadBalancerAttribute:
    r"""LoadBalancerAttribute
    Information about a load balancer attribute.
    """
    
    key: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
