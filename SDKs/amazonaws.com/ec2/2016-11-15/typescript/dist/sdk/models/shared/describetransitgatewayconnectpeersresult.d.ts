import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The BGP status.
 */
export declare enum DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersConnectPeerConfigurationBgpConfigurationsBgpStatusEnum {
    Up = "up",
    Down = "down"
}
/**
 * The BGP configuration information.
 */
export declare class DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersConnectPeerConfigurationBgpConfigurations extends SpeakeasyBase {
    bgpStatus?: DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersConnectPeerConfigurationBgpConfigurationsBgpStatusEnum;
    peerAddress?: string;
    peerAsn?: number;
    transitGatewayAddress?: string;
    transitGatewayAsn?: number;
}
/**
 * The tunnel protocol.
 */
export declare enum DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersConnectPeerConfigurationProtocolEnum {
    Gre = "gre"
}
/**
 * The Connect peer details.
 */
export declare class DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersConnectPeerConfiguration extends SpeakeasyBase {
    bgpConfigurations?: DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersConnectPeerConfigurationBgpConfigurations[];
    insideCidrBlocks?: string[];
    peerAddress?: string;
    protocol?: DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersConnectPeerConfigurationProtocolEnum;
    transitGatewayAddress?: string;
}
/**
 * The state of the Connect peer.
 */
export declare enum DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a transit gateway Connect peer.
 */
export declare class DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeers extends SpeakeasyBase {
    connectPeerConfiguration?: DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersConnectPeerConfiguration;
    creationTime?: Date;
    state?: DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersStateEnum;
    tags?: DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeersTags[];
    transitGatewayAttachmentId?: string;
    transitGatewayConnectPeerId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewayConnectPeersResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayConnectPeers?: DescribeTransitGatewayConnectPeersResultTransitGatewayConnectPeers[];
}
