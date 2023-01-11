import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeLocalGatewayRouteTableVpcAssociationsResult:
    local_gateway_route_table_vpc_associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
