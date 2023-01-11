import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTransitGatewayRouteTablesResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_route_tables: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
