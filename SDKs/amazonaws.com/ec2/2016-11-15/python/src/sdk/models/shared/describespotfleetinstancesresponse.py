import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSpotFleetInstancesResponse:
    r"""DescribeSpotFleetInstancesResponse
    Contains the output of DescribeSpotFleetInstances.
    """
    
    active_instances: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    spot_fleet_request_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
