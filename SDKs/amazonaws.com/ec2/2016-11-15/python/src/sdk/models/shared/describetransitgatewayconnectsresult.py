import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTransitGatewayConnectsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_connects: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
