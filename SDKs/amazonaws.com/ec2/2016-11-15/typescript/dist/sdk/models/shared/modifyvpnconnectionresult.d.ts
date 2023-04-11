import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the gateway association.
 */
export declare enum ModifyVpnConnectionResultVpnConnectionGatewayAssociationStateEnum {
    Associated = "associated",
    NotAssociated = "not-associated",
    Associating = "associating",
    Disassociating = "disassociating"
}
/**
 * Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.
 */
export declare enum ModifyVpnConnectionResultVpnConnectionOptionsTunnelInsideIpVersionEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The internet key exchange (IKE) version permitted for the VPN tunnel.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsIkeVersions extends SpeakeasyBase {
    value?: string;
}
/**
 * Options for sending VPN tunnel logs to CloudWatch.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions extends SpeakeasyBase {
    logEnabled?: boolean;
    logGroupArn?: string;
    logOutputFormat?: string;
}
/**
 * Options for logging VPN tunnel activity.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsLogOptions extends SpeakeasyBase {
    cloudWatchLogOptions?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions;
}
/**
 * The Diffie-Hellmann group number for phase 1 IKE negotiations.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 1 IKE negotiations.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 1 IKE negotiations.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The Diffie-Hellmann group number for phase 2 IKE negotiations.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 2 IKE negotiations.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 2 IKE negotiations.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The VPN tunnel options.
 */
export declare class ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptions extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsIkeVersions[];
    logOptions?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsLogOptions;
    outsideIpAddress?: string;
    phase1DHGroupNumbers?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers[];
    phase1EncryptionAlgorithms?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms[];
    phase1IntegrityAlgorithms?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms[];
    phase1LifetimeSeconds?: number;
    phase2DHGroupNumbers?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers[];
    phase2EncryptionAlgorithms?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms[];
    phase2IntegrityAlgorithms?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms[];
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
export declare class ModifyVpnConnectionResultVpnConnectionOptions extends SpeakeasyBase {
    enableAcceleration?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    outsideIpAddressType?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    staticRoutesOnly?: boolean;
    transportTransitGatewayAttachmentId?: string;
    tunnelInsideIpVersion?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelInsideIpVersionEnum;
    tunnelOptions?: ModifyVpnConnectionResultVpnConnectionOptionsTunnelOptions[];
}
/**
 * Indicates how the routes were provided.
 */
export declare enum ModifyVpnConnectionResultVpnConnectionRoutesSourceEnum {
    Static = "Static"
}
/**
 * The current state of the static route.
 */
export declare enum ModifyVpnConnectionResultVpnConnectionRoutesStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a static route for a VPN connection.
 */
export declare class ModifyVpnConnectionResultVpnConnectionRoutes extends SpeakeasyBase {
    destinationCidrBlock?: string;
    source?: ModifyVpnConnectionResultVpnConnectionRoutesSourceEnum;
    state?: ModifyVpnConnectionResultVpnConnectionRoutesStateEnum;
}
/**
 * The current state of the VPN connection.
 */
export declare enum ModifyVpnConnectionResultVpnConnectionStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class ModifyVpnConnectionResultVpnConnectionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of VPN connection.
 */
export declare enum ModifyVpnConnectionResultVpnConnectionTypeEnum {
    Ipsec1 = "ipsec.1"
}
/**
 * The status of the VPN tunnel.
 */
export declare enum ModifyVpnConnectionResultVpnConnectionVgwTelemetryStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
/**
 * Describes telemetry for a VPN tunnel.
 */
export declare class ModifyVpnConnectionResultVpnConnectionVgwTelemetry extends SpeakeasyBase {
    acceptedRouteCount?: number;
    certificateArn?: string;
    lastStatusChange?: Date;
    outsideIpAddress?: string;
    status?: ModifyVpnConnectionResultVpnConnectionVgwTelemetryStatusEnum;
    statusMessage?: string;
}
/**
 * Information about the VPN connection.
 */
export declare class ModifyVpnConnectionResultVpnConnection extends SpeakeasyBase {
    category?: string;
    coreNetworkArn?: string;
    coreNetworkAttachmentArn?: string;
    customerGatewayConfiguration?: string;
    customerGatewayId?: string;
    gatewayAssociationState?: ModifyVpnConnectionResultVpnConnectionGatewayAssociationStateEnum;
    options?: ModifyVpnConnectionResultVpnConnectionOptions;
    routes?: ModifyVpnConnectionResultVpnConnectionRoutes[];
    state?: ModifyVpnConnectionResultVpnConnectionStateEnum;
    tags?: ModifyVpnConnectionResultVpnConnectionTags[];
    transitGatewayId?: string;
    type?: ModifyVpnConnectionResultVpnConnectionTypeEnum;
    vgwTelemetry?: ModifyVpnConnectionResultVpnConnectionVgwTelemetry[];
    vpnConnectionId?: string;
    vpnGatewayId?: string;
}
/**
 * Success
 */
export declare class ModifyVpnConnectionResult extends SpeakeasyBase {
    vpnConnection?: ModifyVpnConnectionResultVpnConnection;
}
