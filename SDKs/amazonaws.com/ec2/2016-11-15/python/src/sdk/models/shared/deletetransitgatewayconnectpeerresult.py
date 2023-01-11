import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration:
    r"""DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
    The Connect peer details.
    """
    
    bgp_configurations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    inside_cidr_blocks: Optional[dict[str, Any]] = dataclasses.field(default=None)
    peer_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    protocol: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer:
    r"""DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer
    Information about the deleted Connect peer.
    """
    
    connect_peer_configuration: Optional[DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration] = dataclasses.field(default=None)
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_connect_peer_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayConnectPeerResult:
    transit_gateway_connect_peer: Optional[DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer] = dataclasses.field(default=None)
    
