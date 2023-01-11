import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ReplaceTransitGatewayRouteResultRoute:
    r"""ReplaceTransitGatewayRouteResultRoute
    Information about the modified route.
    """
    
    destination_cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ReplaceTransitGatewayRouteResult:
    route: Optional[ReplaceTransitGatewayRouteResultRoute] = dataclasses.field(default=None)
    
