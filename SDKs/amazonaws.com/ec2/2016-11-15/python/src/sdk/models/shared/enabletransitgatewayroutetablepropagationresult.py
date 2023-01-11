import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EnableTransitGatewayRouteTablePropagationResultPropagation:
    r"""EnableTransitGatewayRouteTablePropagationResultPropagation
    Information about route propagation.
    """
    
    resource_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class EnableTransitGatewayRouteTablePropagationResult:
    propagation: Optional[EnableTransitGatewayRouteTablePropagationResultPropagation] = dataclasses.field(default=None)
    
