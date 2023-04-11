import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the gateway association.
 */
export declare enum ModifyVpnConnectionOptionsResultVpnConnectionGatewayAssociationStateEnum {
    Associated = "associated",
    NotAssociated = "not-associated",
    Associating = "associating",
    Disassociating = "disassociating"
}
/**
 * Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.
 */
export declare enum ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelInsideIpVersionEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The internet key exchange (IKE) version permitted for the VPN tunnel.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsIkeVersions extends SpeakeasyBase {
    value?: string;
}
/**
 * Options for sending VPN tunnel logs to CloudWatch.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions extends SpeakeasyBase {
    logEnabled?: boolean;
    logGroupArn?: string;
    logOutputFormat?: string;
}
/**
 * Options for logging VPN tunnel activity.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsLogOptions extends SpeakeasyBase {
    cloudWatchLogOptions?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions;
}
/**
 * The Diffie-Hellmann group number for phase 1 IKE negotiations.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 1 IKE negotiations.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 1 IKE negotiations.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The Diffie-Hellmann group number for phase 2 IKE negotiations.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 2 IKE negotiations.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 2 IKE negotiations.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The VPN tunnel options.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptions extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsIkeVersions[];
    logOptions?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsLogOptions;
    outsideIpAddress?: string;
    phase1DHGroupNumbers?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers[];
    phase1EncryptionAlgorithms?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms[];
    phase1IntegrityAlgorithms?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms[];
    phase1LifetimeSeconds?: number;
    phase2DHGroupNumbers?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers[];
    phase2EncryptionAlgorithms?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms[];
    phase2IntegrityAlgorithms?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms[];
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
export declare class ModifyVpnConnectionOptionsResultVpnConnectionOptions extends SpeakeasyBase {
    enableAcceleration?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    outsideIpAddressType?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    staticRoutesOnly?: boolean;
    transportTransitGatewayAttachmentId?: string;
    tunnelInsideIpVersion?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelInsideIpVersionEnum;
    tunnelOptions?: ModifyVpnConnectionOptionsResultVpnConnectionOptionsTunnelOptions[];
}
/**
 * Indicates how the routes were provided.
 */
export declare enum ModifyVpnConnectionOptionsResultVpnConnectionRoutesSourceEnum {
    Static = "Static"
}
/**
 * The current state of the static route.
 */
export declare enum ModifyVpnConnectionOptionsResultVpnConnectionRoutesStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a static route for a VPN connection.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionRoutes extends SpeakeasyBase {
    destinationCidrBlock?: string;
    source?: ModifyVpnConnectionOptionsResultVpnConnectionRoutesSourceEnum;
    state?: ModifyVpnConnectionOptionsResultVpnConnectionRoutesStateEnum;
}
/**
 * The current state of the VPN connection.
 */
export declare enum ModifyVpnConnectionOptionsResultVpnConnectionStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of VPN connection.
 */
export declare enum ModifyVpnConnectionOptionsResultVpnConnectionTypeEnum {
    Ipsec1 = "ipsec.1"
}
/**
 * The status of the VPN tunnel.
 */
export declare enum ModifyVpnConnectionOptionsResultVpnConnectionVgwTelemetryStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
/**
 * Describes telemetry for a VPN tunnel.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnectionVgwTelemetry extends SpeakeasyBase {
    acceptedRouteCount?: number;
    certificateArn?: string;
    lastStatusChange?: Date;
    outsideIpAddress?: string;
    status?: ModifyVpnConnectionOptionsResultVpnConnectionVgwTelemetryStatusEnum;
    statusMessage?: string;
}
/**
 * Information about the VPN connection.
 */
export declare class ModifyVpnConnectionOptionsResultVpnConnection extends SpeakeasyBase {
    category?: string;
    coreNetworkArn?: string;
    coreNetworkAttachmentArn?: string;
    customerGatewayConfiguration?: string;
    customerGatewayId?: string;
    gatewayAssociationState?: ModifyVpnConnectionOptionsResultVpnConnectionGatewayAssociationStateEnum;
    options?: ModifyVpnConnectionOptionsResultVpnConnectionOptions;
    routes?: ModifyVpnConnectionOptionsResultVpnConnectionRoutes[];
    state?: ModifyVpnConnectionOptionsResultVpnConnectionStateEnum;
    tags?: ModifyVpnConnectionOptionsResultVpnConnectionTags[];
    transitGatewayId?: string;
    type?: ModifyVpnConnectionOptionsResultVpnConnectionTypeEnum;
    vgwTelemetry?: ModifyVpnConnectionOptionsResultVpnConnectionVgwTelemetry[];
    vpnConnectionId?: string;
    vpnGatewayId?: string;
}
/**
 * Success
 */
export declare class ModifyVpnConnectionOptionsResult extends SpeakeasyBase {
    vpnConnection?: ModifyVpnConnectionOptionsResultVpnConnection;
}
