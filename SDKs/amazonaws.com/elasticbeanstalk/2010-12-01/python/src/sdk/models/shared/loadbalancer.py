import dataclasses
from typing import Optional


@dataclasses.dataclass
class LoadBalancer:
    r"""LoadBalancer
    Describes a LoadBalancer.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    
