import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the gateway association.
 */
export declare enum DescribeVpnConnectionsResultVpnConnectionsGatewayAssociationStateEnum {
    Associated = "associated",
    NotAssociated = "not-associated",
    Associating = "associating",
    Disassociating = "disassociating"
}
/**
 * Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.
 */
export declare enum DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelInsideIpVersionEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The internet key exchange (IKE) version permitted for the VPN tunnel.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsIkeVersions extends SpeakeasyBase {
    value?: string;
}
/**
 * Options for sending VPN tunnel logs to CloudWatch.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsLogOptionsCloudWatchLogOptions extends SpeakeasyBase {
    logEnabled?: boolean;
    logGroupArn?: string;
    logOutputFormat?: string;
}
/**
 * Options for logging VPN tunnel activity.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsLogOptions extends SpeakeasyBase {
    cloudWatchLogOptions?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsLogOptionsCloudWatchLogOptions;
}
/**
 * The Diffie-Hellmann group number for phase 1 IKE negotiations.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase1DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 1 IKE negotiations.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase1EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 1 IKE negotiations.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase1IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The Diffie-Hellmann group number for phase 2 IKE negotiations.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase2DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 2 IKE negotiations.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase2EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 2 IKE negotiations.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase2IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The VPN tunnel options.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptions extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsIkeVersions[];
    logOptions?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsLogOptions;
    outsideIpAddress?: string;
    phase1DHGroupNumbers?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase1DHGroupNumbers[];
    phase1EncryptionAlgorithms?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase1EncryptionAlgorithms[];
    phase1IntegrityAlgorithms?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase1IntegrityAlgorithms[];
    phase1LifetimeSeconds?: number;
    phase2DHGroupNumbers?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase2DHGroupNumbers[];
    phase2EncryptionAlgorithms?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase2EncryptionAlgorithms[];
    phase2IntegrityAlgorithms?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptionsPhase2IntegrityAlgorithms[];
    phase2LifetimeSeconds?: number;
    preSharedKey?: string;
    rekeyFuzzPercentage?: number;
    rekeyMarginTimeSeconds?: number;
    replayWindowSize?: number;
    startupAction?: string;
    tunnelInsideCidr?: string;
    tunnelInsideIpv6Cidr?: string;
}
/**
 * The VPN connection options.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsOptions extends SpeakeasyBase {
    enableAcceleration?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    outsideIpAddressType?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    staticRoutesOnly?: boolean;
    transportTransitGatewayAttachmentId?: string;
    tunnelInsideIpVersion?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelInsideIpVersionEnum;
    tunnelOptions?: DescribeVpnConnectionsResultVpnConnectionsOptionsTunnelOptions[];
}
/**
 * Indicates how the routes were provided.
 */
export declare enum DescribeVpnConnectionsResultVpnConnectionsRoutesSourceEnum {
    Static = "Static"
}
/**
 * The current state of the static route.
 */
export declare enum DescribeVpnConnectionsResultVpnConnectionsRoutesStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a static route for a VPN connection.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsRoutes extends SpeakeasyBase {
    destinationCidrBlock?: string;
    source?: DescribeVpnConnectionsResultVpnConnectionsRoutesSourceEnum;
    state?: DescribeVpnConnectionsResultVpnConnectionsRoutesStateEnum;
}
/**
 * The current state of the VPN connection.
 */
export declare enum DescribeVpnConnectionsResultVpnConnectionsStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of VPN connection.
 */
export declare enum DescribeVpnConnectionsResultVpnConnectionsTypeEnum {
    Ipsec1 = "ipsec.1"
}
/**
 * The status of the VPN tunnel.
 */
export declare enum DescribeVpnConnectionsResultVpnConnectionsVgwTelemetryStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
/**
 * Describes telemetry for a VPN tunnel.
 */
export declare class DescribeVpnConnectionsResultVpnConnectionsVgwTelemetry extends SpeakeasyBase {
    acceptedRouteCount?: number;
    certificateArn?: string;
    lastStatusChange?: Date;
    outsideIpAddress?: string;
    status?: DescribeVpnConnectionsResultVpnConnectionsVgwTelemetryStatusEnum;
    statusMessage?: string;
}
/**
 * Describes a VPN connection.
 */
export declare class DescribeVpnConnectionsResultVpnConnections extends SpeakeasyBase {
    category?: string;
    coreNetworkArn?: string;
    coreNetworkAttachmentArn?: string;
    customerGatewayConfiguration?: string;
    customerGatewayId?: string;
    gatewayAssociationState?: DescribeVpnConnectionsResultVpnConnectionsGatewayAssociationStateEnum;
    options?: DescribeVpnConnectionsResultVpnConnectionsOptions;
    routes?: DescribeVpnConnectionsResultVpnConnectionsRoutes[];
    state?: DescribeVpnConnectionsResultVpnConnectionsStateEnum;
    tags?: DescribeVpnConnectionsResultVpnConnectionsTags[];
    transitGatewayId?: string;
    type?: DescribeVpnConnectionsResultVpnConnectionsTypeEnum;
    vgwTelemetry?: DescribeVpnConnectionsResultVpnConnectionsVgwTelemetry[];
    vpnConnectionId?: string;
    vpnGatewayId?: string;
}
/**
 * Contains the output of DescribeVpnConnections.
 */
export declare class DescribeVpnConnectionsResult extends SpeakeasyBase {
    vpnConnections?: DescribeVpnConnectionsResultVpnConnections[];
}
