import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The BGP status.
 */
export declare enum CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsBgpStatusEnum {
    Up = "up",
    Down = "down"
}
/**
 * The BGP configuration information.
 */
export declare class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations extends SpeakeasyBase {
    bgpStatus?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurationsBgpStatusEnum;
    peerAddress?: string;
    peerAsn?: number;
    transitGatewayAddress?: string;
    transitGatewayAsn?: number;
}
/**
 * The tunnel protocol.
 */
export declare enum CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationProtocolEnum {
    Gre = "gre"
}
/**
 * The Connect peer details.
 */
export declare class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration extends SpeakeasyBase {
    bgpConfigurations?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationBgpConfigurations[];
    insideCidrBlocks?: string[];
    peerAddress?: string;
    protocol?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfigurationProtocolEnum;
    transitGatewayAddress?: string;
}
/**
 * The state of the Connect peer.
 */
export declare enum CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the Connect peer.
 */
export declare class CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer extends SpeakeasyBase {
    connectPeerConfiguration?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;
    creationTime?: Date;
    state?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerStateEnum;
    tags?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayConnectPeerId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayConnectPeerResult extends SpeakeasyBase {
    transitGatewayConnectPeer?: CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
}
