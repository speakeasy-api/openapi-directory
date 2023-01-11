import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeLocalGatewayRouteTablesResult:
    local_gateway_route_tables: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
