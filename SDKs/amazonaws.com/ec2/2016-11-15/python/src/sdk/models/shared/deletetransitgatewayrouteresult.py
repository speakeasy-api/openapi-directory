import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTransitGatewayRouteResultRoute:
    r"""DeleteTransitGatewayRouteResultRoute
    Information about the route.
    """
    
    destination_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayRouteResult:
    route: Optional[DeleteTransitGatewayRouteResultRoute] = dataclasses.field(default=None)
    
