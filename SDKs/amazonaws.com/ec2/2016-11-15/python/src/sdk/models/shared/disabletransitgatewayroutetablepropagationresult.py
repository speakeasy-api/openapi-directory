import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DisableTransitGatewayRouteTablePropagationResultPropagation:
    r"""DisableTransitGatewayRouteTablePropagationResultPropagation
    Information about route propagation.
    """
    
    resource_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisableTransitGatewayRouteTablePropagationResult:
    propagation: Optional[DisableTransitGatewayRouteTablePropagationResultPropagation] = dataclasses.field(default=None)
    
