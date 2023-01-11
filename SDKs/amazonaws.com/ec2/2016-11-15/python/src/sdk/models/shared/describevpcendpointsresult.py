import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcEndpointsResult:
    r"""DescribeVpcEndpointsResult
    Contains the output of DescribeVpcEndpoints.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_endpoints: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
