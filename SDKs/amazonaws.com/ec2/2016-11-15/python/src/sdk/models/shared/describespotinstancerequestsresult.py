import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSpotInstanceRequestsResult:
    r"""DescribeSpotInstanceRequestsResult
    Contains the output of DescribeSpotInstanceRequests.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    spot_instance_requests: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
