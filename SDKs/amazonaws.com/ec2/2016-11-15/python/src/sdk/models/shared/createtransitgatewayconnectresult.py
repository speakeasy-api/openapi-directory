import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateTransitGatewayConnectResultTransitGatewayConnectOptions:
    r"""CreateTransitGatewayConnectResultTransitGatewayConnectOptions
    The Connect attachment options.
    """
    
    protocol: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayConnectResultTransitGatewayConnect:
    r"""CreateTransitGatewayConnectResultTransitGatewayConnect
    Information about the Connect attachment.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    options: Optional[CreateTransitGatewayConnectResultTransitGatewayConnectOptions] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transport_transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayConnectResult:
    transit_gateway_connect: Optional[CreateTransitGatewayConnectResultTransitGatewayConnect] = dataclasses.field(default=None)
    
