import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable:
    r"""DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable
    Information about the deleted transit gateway route table.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_association_route_table: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_propagation_route_table: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayRouteTableResult:
    transit_gateway_route_table: Optional[DeleteTransitGatewayRouteTableResultTransitGatewayRouteTable] = dataclasses.field(default=None)
    
