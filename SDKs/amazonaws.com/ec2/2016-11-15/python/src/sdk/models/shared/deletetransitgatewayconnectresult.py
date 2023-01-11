import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTransitGatewayConnectResultTransitGatewayConnectOptions:
    r"""DeleteTransitGatewayConnectResultTransitGatewayConnectOptions
    The Connect attachment options.
    """
    
    protocol: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayConnectResultTransitGatewayConnect:
    r"""DeleteTransitGatewayConnectResultTransitGatewayConnect
    Information about the deleted Connect attachment.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    options: Optional[DeleteTransitGatewayConnectResultTransitGatewayConnectOptions] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transport_transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayConnectResult:
    transit_gateway_connect: Optional[DeleteTransitGatewayConnectResultTransitGatewayConnect] = dataclasses.field(default=None)
    
