import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTransitGatewayConnectPeersResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_connect_peers: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
