import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateTransitGatewayRouteTableResultTransitGatewayRouteTable:
    r"""CreateTransitGatewayRouteTableResultTransitGatewayRouteTable
    Information about the transit gateway route table.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_association_route_table: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_propagation_route_table: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayRouteTableResult:
    transit_gateway_route_table: Optional[CreateTransitGatewayRouteTableResultTransitGatewayRouteTable] = dataclasses.field(default=None)
    
