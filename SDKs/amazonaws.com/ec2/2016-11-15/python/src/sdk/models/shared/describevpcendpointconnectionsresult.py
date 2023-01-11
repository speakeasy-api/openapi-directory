import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcEndpointConnectionsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_endpoint_connections: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
