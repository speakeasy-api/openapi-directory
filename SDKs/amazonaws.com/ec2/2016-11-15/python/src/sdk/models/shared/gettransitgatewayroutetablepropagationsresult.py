import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetTransitGatewayRouteTablePropagationsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_route_table_propagations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
