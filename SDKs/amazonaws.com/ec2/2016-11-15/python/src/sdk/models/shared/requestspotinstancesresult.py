import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RequestSpotInstancesResult:
    r"""RequestSpotInstancesResult
    Contains the output of RequestSpotInstances.
    """
    
    spot_instance_requests: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
