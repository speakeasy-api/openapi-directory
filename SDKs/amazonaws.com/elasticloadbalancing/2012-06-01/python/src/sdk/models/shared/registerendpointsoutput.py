import dataclasses
from typing import Optional
from ..shared import instance as shared_instance


@dataclasses.dataclass
class RegisterEndPointsOutput:
    r"""RegisterEndPointsOutput
    Contains the output of RegisterInstancesWithLoadBalancer.
    """
    
    instances: Optional[list[shared_instance.Instance]] = dataclasses.field(default=None)
    
