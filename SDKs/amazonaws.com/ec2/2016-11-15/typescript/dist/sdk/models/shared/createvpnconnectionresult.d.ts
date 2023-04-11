import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the gateway association.
 */
export declare enum CreateVpnConnectionResultVpnConnectionGatewayAssociationStateEnum {
    Associated = "associated",
    NotAssociated = "not-associated",
    Associating = "associating",
    Disassociating = "disassociating"
}
/**
 * Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.
 */
export declare enum CreateVpnConnectionResultVpnConnectionOptionsTunnelInsideIpVersionEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The internet key exchange (IKE) version permitted for the VPN tunnel.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsIkeVersions extends SpeakeasyBase {
    value?: string;
}
/**
 * Options for sending VPN tunnel logs to CloudWatch.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions extends SpeakeasyBase {
    logEnabled?: boolean;
    logGroupArn?: string;
    logOutputFormat?: string;
}
/**
 * Options for logging VPN tunnel activity.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsLogOptions extends SpeakeasyBase {
    cloudWatchLogOptions?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions;
}
/**
 * The Diffie-Hellmann group number for phase 1 IKE negotiations.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 1 IKE negotiations.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 1 IKE negotiations.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The Diffie-Hellmann group number for phase 2 IKE negotiations.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 2 IKE negotiations.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 2 IKE negotiations.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The VPN tunnel options.
 */
export declare class CreateVpnConnectionResultVpnConnectionOptionsTunnelOptions extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsIkeVersions[];
    logOptions?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsLogOptions;
    outsideIpAddress?: string;
    phase1DHGroupNumbers?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers[];
    phase1EncryptionAlgorithms?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms[];
    phase1IntegrityAlgorithms?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms[];
    phase1LifetimeSeconds?: number;
    phase2DHGroupNumbers?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers[];
    phase2EncryptionAlgorithms?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms[];
    phase2IntegrityAlgorithms?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms[];
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
export declare class CreateVpnConnectionResultVpnConnectionOptions extends SpeakeasyBase {
    enableAcceleration?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    outsideIpAddressType?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    staticRoutesOnly?: boolean;
    transportTransitGatewayAttachmentId?: string;
    tunnelInsideIpVersion?: CreateVpnConnectionResultVpnConnectionOptionsTunnelInsideIpVersionEnum;
    tunnelOptions?: CreateVpnConnectionResultVpnConnectionOptionsTunnelOptions[];
}
/**
 * Indicates how the routes were provided.
 */
export declare enum CreateVpnConnectionResultVpnConnectionRoutesSourceEnum {
    Static = "Static"
}
/**
 * The current state of the static route.
 */
export declare enum CreateVpnConnectionResultVpnConnectionRoutesStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a static route for a VPN connection.
 */
export declare class CreateVpnConnectionResultVpnConnectionRoutes extends SpeakeasyBase {
    destinationCidrBlock?: string;
    source?: CreateVpnConnectionResultVpnConnectionRoutesSourceEnum;
    state?: CreateVpnConnectionResultVpnConnectionRoutesStateEnum;
}
/**
 * The current state of the VPN connection.
 */
export declare enum CreateVpnConnectionResultVpnConnectionStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateVpnConnectionResultVpnConnectionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of VPN connection.
 */
export declare enum CreateVpnConnectionResultVpnConnectionTypeEnum {
    Ipsec1 = "ipsec.1"
}
/**
 * The status of the VPN tunnel.
 */
export declare enum CreateVpnConnectionResultVpnConnectionVgwTelemetryStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
/**
 * Describes telemetry for a VPN tunnel.
 */
export declare class CreateVpnConnectionResultVpnConnectionVgwTelemetry extends SpeakeasyBase {
    acceptedRouteCount?: number;
    certificateArn?: string;
    lastStatusChange?: Date;
    outsideIpAddress?: string;
    status?: CreateVpnConnectionResultVpnConnectionVgwTelemetryStatusEnum;
    statusMessage?: string;
}
/**
 * Information about the VPN connection.
 */
export declare class CreateVpnConnectionResultVpnConnection extends SpeakeasyBase {
    category?: string;
    coreNetworkArn?: string;
    coreNetworkAttachmentArn?: string;
    customerGatewayConfiguration?: string;
    customerGatewayId?: string;
    gatewayAssociationState?: CreateVpnConnectionResultVpnConnectionGatewayAssociationStateEnum;
    options?: CreateVpnConnectionResultVpnConnectionOptions;
    routes?: CreateVpnConnectionResultVpnConnectionRoutes[];
    state?: CreateVpnConnectionResultVpnConnectionStateEnum;
    tags?: CreateVpnConnectionResultVpnConnectionTags[];
    transitGatewayId?: string;
    type?: CreateVpnConnectionResultVpnConnectionTypeEnum;
    vgwTelemetry?: CreateVpnConnectionResultVpnConnectionVgwTelemetry[];
    vpnConnectionId?: string;
    vpnGatewayId?: string;
}
/**
 * Contains the output of CreateVpnConnection.
 */
export declare class CreateVpnConnectionResult extends SpeakeasyBase {
    vpnConnection?: CreateVpnConnectionResultVpnConnection;
}
