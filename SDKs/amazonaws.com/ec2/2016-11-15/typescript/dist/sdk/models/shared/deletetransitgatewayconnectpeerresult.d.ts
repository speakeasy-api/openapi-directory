import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The BGP status.
 */
export declare enum DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsBgpStatusEnum {
    Up = "up",
    Down = "down"
}
/**
 * The BGP configuration information.
 */
export declare class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations extends SpeakeasyBase {
    bgpStatus?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsBgpStatusEnum;
    peerAddress?: string;
    peerAsn?: number;
    transitGatewayAddress?: string;
    transitGatewayAsn?: number;
}
/**
 * The tunnel protocol.
 */
export declare enum DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationProtocolEnum {
    Gre = "gre"
}
/**
 * The Connect peer details.
 */
export declare class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration extends SpeakeasyBase {
    bgpConfigurations?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations[];
    insideCidrBlocks?: string[];
    peerAddress?: string;
    protocol?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationProtocolEnum;
    transitGatewayAddress?: string;
}
/**
 * The state of the Connect peer.
 */
export declare enum DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the deleted Connect peer.
 */
export declare class DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer extends SpeakeasyBase {
    connectPeerConfiguration?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;
    creationTime?: Date;
    state?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerStateEnum;
    tags?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayConnectPeerId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayConnectPeerResult extends SpeakeasyBase {
    transitGatewayConnectPeer?: DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
}
