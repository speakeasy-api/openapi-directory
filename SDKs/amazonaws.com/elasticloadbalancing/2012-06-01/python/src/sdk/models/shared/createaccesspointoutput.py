import dataclasses
from typing import Optional


@dataclasses.dataclass
class CreateAccessPointOutput:
    r"""CreateAccessPointOutput
    Contains the output for CreateLoadBalancer.
    """
    
    dns_name: Optional[str] = dataclasses.field(default=None)
    
