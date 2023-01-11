import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteLocalGatewayRouteResultRoute:
    r"""DeleteLocalGatewayRouteResultRoute
    Information about the route.
    """
    
    destination_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_gateway_route_table_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    local_gateway_virtual_interface_group_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteLocalGatewayRouteResult:
    route: Optional[DeleteLocalGatewayRouteResultRoute] = dataclasses.field(default=None)
    
