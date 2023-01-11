import dataclasses
from typing import Optional
from ..shared import listener as shared_listener


@dataclasses.dataclass
class LoadBalancerDescription:
    r"""LoadBalancerDescription
    Describes the details of a LoadBalancer.
    """
    
    domain: Optional[str] = dataclasses.field(default=None)
    listeners: Optional[list[shared_listener.Listener]] = dataclasses.field(default=None)
    load_balancer_name: Optional[str] = dataclasses.field(default=None)
    
