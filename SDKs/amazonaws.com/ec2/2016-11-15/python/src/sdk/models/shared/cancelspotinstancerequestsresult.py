import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CancelSpotInstanceRequestsResult:
    r"""CancelSpotInstanceRequestsResult
    Contains the output of CancelSpotInstanceRequests.
    """
    
    cancelled_spot_instance_requests: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
