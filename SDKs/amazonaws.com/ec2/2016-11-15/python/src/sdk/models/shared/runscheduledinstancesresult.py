import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RunScheduledInstancesResult:
    r"""RunScheduledInstancesResult
    Contains the output of RunScheduledInstances.
    """
    
    instance_id_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
