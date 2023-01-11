import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTransitGatewaysResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateways: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
