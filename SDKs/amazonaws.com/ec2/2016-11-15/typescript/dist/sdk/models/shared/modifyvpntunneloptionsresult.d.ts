import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the gateway association.
 */
export declare enum ModifyVpnTunnelOptionsResultVpnConnectionGatewayAssociationStateEnum {
    Associated = "associated",
    NotAssociated = "not-associated",
    Associating = "associating",
    Disassociating = "disassociating"
}
/**
 * Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.
 */
export declare enum ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelInsideIpVersionEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The internet key exchange (IKE) version permitted for the VPN tunnel.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsIkeVersions extends SpeakeasyBase {
    value?: string;
}
/**
 * Options for sending VPN tunnel logs to CloudWatch.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions extends SpeakeasyBase {
    logEnabled?: boolean;
    logGroupArn?: string;
    logOutputFormat?: string;
}
/**
 * Options for logging VPN tunnel activity.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsLogOptions extends SpeakeasyBase {
    cloudWatchLogOptions?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions;
}
/**
 * The Diffie-Hellmann group number for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The Diffie-Hellmann group number for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The VPN tunnel options.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptions extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsIkeVersions[];
    logOptions?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsLogOptions;
    outsideIpAddress?: string;
    phase1DHGroupNumbers?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers[];
    phase1EncryptionAlgorithms?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms[];
    phase1IntegrityAlgorithms?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms[];
    phase1LifetimeSeconds?: number;
    phase2DHGroupNumbers?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers[];
    phase2EncryptionAlgorithms?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms[];
    phase2IntegrityAlgorithms?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms[];
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
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptions extends SpeakeasyBase {
    enableAcceleration?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    outsideIpAddressType?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    staticRoutesOnly?: boolean;
    transportTransitGatewayAttachmentId?: string;
    tunnelInsideIpVersion?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelInsideIpVersionEnum;
    tunnelOptions?: ModifyVpnTunnelOptionsResultVpnConnectionOptionsTunnelOptions[];
}
/**
 * Indicates how the routes were provided.
 */
export declare enum ModifyVpnTunnelOptionsResultVpnConnectionRoutesSourceEnum {
    Static = "Static"
}
/**
 * The current state of the static route.
 */
export declare enum ModifyVpnTunnelOptionsResultVpnConnectionRoutesStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a static route for a VPN connection.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionRoutes extends SpeakeasyBase {
    destinationCidrBlock?: string;
    source?: ModifyVpnTunnelOptionsResultVpnConnectionRoutesSourceEnum;
    state?: ModifyVpnTunnelOptionsResultVpnConnectionRoutesStateEnum;
}
/**
 * The current state of the VPN connection.
 */
export declare enum ModifyVpnTunnelOptionsResultVpnConnectionStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of VPN connection.
 */
export declare enum ModifyVpnTunnelOptionsResultVpnConnectionTypeEnum {
    Ipsec1 = "ipsec.1"
}
/**
 * The status of the VPN tunnel.
 */
export declare enum ModifyVpnTunnelOptionsResultVpnConnectionVgwTelemetryStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
/**
 * Describes telemetry for a VPN tunnel.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnectionVgwTelemetry extends SpeakeasyBase {
    acceptedRouteCount?: number;
    certificateArn?: string;
    lastStatusChange?: Date;
    outsideIpAddress?: string;
    status?: ModifyVpnTunnelOptionsResultVpnConnectionVgwTelemetryStatusEnum;
    statusMessage?: string;
}
/**
 * Information about the VPN connection.
 */
export declare class ModifyVpnTunnelOptionsResultVpnConnection extends SpeakeasyBase {
    category?: string;
    coreNetworkArn?: string;
    coreNetworkAttachmentArn?: string;
    customerGatewayConfiguration?: string;
    customerGatewayId?: string;
    gatewayAssociationState?: ModifyVpnTunnelOptionsResultVpnConnectionGatewayAssociationStateEnum;
    options?: ModifyVpnTunnelOptionsResultVpnConnectionOptions;
    routes?: ModifyVpnTunnelOptionsResultVpnConnectionRoutes[];
    state?: ModifyVpnTunnelOptionsResultVpnConnectionStateEnum;
    tags?: ModifyVpnTunnelOptionsResultVpnConnectionTags[];
    transitGatewayId?: string;
    type?: ModifyVpnTunnelOptionsResultVpnConnectionTypeEnum;
    vgwTelemetry?: ModifyVpnTunnelOptionsResultVpnConnectionVgwTelemetry[];
    vpnConnectionId?: string;
    vpnGatewayId?: string;
}
/**
 * Success
 */
export declare class ModifyVpnTunnelOptionsResult extends SpeakeasyBase {
    vpnConnection?: ModifyVpnTunnelOptionsResultVpnConnection;
}
