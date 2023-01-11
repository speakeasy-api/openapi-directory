import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult:
    local_gateway_route_table_virtual_interface_group_associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
