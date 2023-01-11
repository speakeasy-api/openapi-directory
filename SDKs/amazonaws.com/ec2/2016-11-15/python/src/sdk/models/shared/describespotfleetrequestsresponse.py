import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSpotFleetRequestsResponse:
    r"""DescribeSpotFleetRequestsResponse
    Contains the output of DescribeSpotFleetRequests.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    spot_fleet_request_configs: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
