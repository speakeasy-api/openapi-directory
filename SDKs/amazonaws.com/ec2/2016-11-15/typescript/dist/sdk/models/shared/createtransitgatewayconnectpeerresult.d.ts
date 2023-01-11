import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Connect peer details.
**/
export declare class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration extends SpeakeasyBase {
    bgpConfigurations?: Record<string, any>;
    insideCidrBlocks?: Record<string, any>;
    peerAddress?: Record<string, any>;
    protocol?: Record<string, any>;
    transitGatewayAddress?: Record<string, any>;
}
/**
 * Information about the Connect peer.
**/
export declare class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer extends SpeakeasyBase {
    connectPeerConfiguration?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;
    creationTime?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayConnectPeerId?: Record<string, any>;
}
export declare class CreateTransitGatewayConnectPeerResult extends SpeakeasyBase {
    transitGatewayConnectPeer?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
}
