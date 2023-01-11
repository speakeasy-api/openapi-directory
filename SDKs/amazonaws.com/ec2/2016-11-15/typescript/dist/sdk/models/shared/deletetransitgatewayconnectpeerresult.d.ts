import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Connect peer details.
**/
export declare class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration extends SpeakeasyBase {
    bgpConfigurations?: Record<string, any>;
    insideCidrBlocks?: Record<string, any>;
    peerAddress?: Record<string, any>;
    protocol?: Record<string, any>;
    transitGatewayAddress?: Record<string, any>;
}
/**
 * Information about the deleted Connect peer.
**/
export declare class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer extends SpeakeasyBase {
    connectPeerConfiguration?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;
    creationTime?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayConnectPeerId?: Record<string, any>;
}
export declare class DeleteTransitGatewayConnectPeerResult extends SpeakeasyBase {
    transitGatewayConnectPeer?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
}
