import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcPeeringConnectionsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_peering_connections: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
