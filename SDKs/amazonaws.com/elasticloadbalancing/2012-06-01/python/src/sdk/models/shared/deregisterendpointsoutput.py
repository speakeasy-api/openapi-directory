import dataclasses
from typing import Optional
from ..shared import instance as shared_instance


@dataclasses.dataclass
class DeregisterEndPointsOutput:
    r"""DeregisterEndPointsOutput
    Contains the output of DeregisterInstancesFromLoadBalancer.
    """
    
    instances: Optional[list[shared_instance.Instance]] = dataclasses.field(default=None)
    
