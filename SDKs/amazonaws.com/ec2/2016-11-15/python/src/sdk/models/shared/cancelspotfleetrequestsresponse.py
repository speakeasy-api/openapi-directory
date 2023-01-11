import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CancelSpotFleetRequestsResponse:
    r"""CancelSpotFleetRequestsResponse
    Contains the output of CancelSpotFleetRequests.
    """
    
    successful_fleet_requests: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unsuccessful_fleet_requests: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
