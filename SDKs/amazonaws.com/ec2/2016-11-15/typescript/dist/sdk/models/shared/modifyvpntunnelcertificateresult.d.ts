import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the gateway association.
 */
export declare enum ModifyVpnTunnelCertificateResultVpnConnectionGatewayAssociationStateEnum {
    Associated = "associated",
    NotAssociated = "not-associated",
    Associating = "associating",
    Disassociating = "disassociating"
}
/**
 * Indicates whether the VPN tunnels process IPv4 or IPv6 traffic.
 */
export declare enum ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelInsideIpVersionEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * The internet key exchange (IKE) version permitted for the VPN tunnel.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsIkeVersions extends SpeakeasyBase {
    value?: string;
}
/**
 * Options for sending VPN tunnel logs to CloudWatch.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions extends SpeakeasyBase {
    logEnabled?: boolean;
    logGroupArn?: string;
    logOutputFormat?: string;
}
/**
 * Options for logging VPN tunnel activity.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsLogOptions extends SpeakeasyBase {
    cloudWatchLogOptions?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsLogOptionsCloudWatchLogOptions;
}
/**
 * The Diffie-Hellmann group number for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 1 IKE negotiations.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The Diffie-Hellmann group number for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * The encryption algorithm for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The integrity algorithm for phase 2 IKE negotiations.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The VPN tunnel options.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptions extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsIkeVersions[];
    logOptions?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsLogOptions;
    outsideIpAddress?: string;
    phase1DHGroupNumbers?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase1DHGroupNumbers[];
    phase1EncryptionAlgorithms?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase1EncryptionAlgorithms[];
    phase1IntegrityAlgorithms?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase1IntegrityAlgorithms[];
    phase1LifetimeSeconds?: number;
    phase2DHGroupNumbers?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase2DHGroupNumbers[];
    phase2EncryptionAlgorithms?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase2EncryptionAlgorithms[];
    phase2IntegrityAlgorithms?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptionsPhase2IntegrityAlgorithms[];
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
export declare class ModifyVpnTunnelCertificateResultVpnConnectionOptions extends SpeakeasyBase {
    enableAcceleration?: boolean;
    localIpv4NetworkCidr?: string;
    localIpv6NetworkCidr?: string;
    outsideIpAddressType?: string;
    remoteIpv4NetworkCidr?: string;
    remoteIpv6NetworkCidr?: string;
    staticRoutesOnly?: boolean;
    transportTransitGatewayAttachmentId?: string;
    tunnelInsideIpVersion?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelInsideIpVersionEnum;
    tunnelOptions?: ModifyVpnTunnelCertificateResultVpnConnectionOptionsTunnelOptions[];
}
/**
 * Indicates how the routes were provided.
 */
export declare enum ModifyVpnTunnelCertificateResultVpnConnectionRoutesSourceEnum {
    Static = "Static"
}
/**
 * The current state of the static route.
 */
export declare enum ModifyVpnTunnelCertificateResultVpnConnectionRoutesStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a static route for a VPN connection.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionRoutes extends SpeakeasyBase {
    destinationCidrBlock?: string;
    source?: ModifyVpnTunnelCertificateResultVpnConnectionRoutesSourceEnum;
    state?: ModifyVpnTunnelCertificateResultVpnConnectionRoutesStateEnum;
}
/**
 * The current state of the VPN connection.
 */
export declare enum ModifyVpnTunnelCertificateResultVpnConnectionStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The type of VPN connection.
 */
export declare enum ModifyVpnTunnelCertificateResultVpnConnectionTypeEnum {
    Ipsec1 = "ipsec.1"
}
/**
 * The status of the VPN tunnel.
 */
export declare enum ModifyVpnTunnelCertificateResultVpnConnectionVgwTelemetryStatusEnum {
    Up = "UP",
    Down = "DOWN"
}
/**
 * Describes telemetry for a VPN tunnel.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnectionVgwTelemetry extends SpeakeasyBase {
    acceptedRouteCount?: number;
    certificateArn?: string;
    lastStatusChange?: Date;
    outsideIpAddress?: string;
    status?: ModifyVpnTunnelCertificateResultVpnConnectionVgwTelemetryStatusEnum;
    statusMessage?: string;
}
/**
 * Information about the VPN connection.
 */
export declare class ModifyVpnTunnelCertificateResultVpnConnection extends SpeakeasyBase {
    category?: string;
    coreNetworkArn?: string;
    coreNetworkAttachmentArn?: string;
    customerGatewayConfiguration?: string;
    customerGatewayId?: string;
    gatewayAssociationState?: ModifyVpnTunnelCertificateResultVpnConnectionGatewayAssociationStateEnum;
    options?: ModifyVpnTunnelCertificateResultVpnConnectionOptions;
    routes?: ModifyVpnTunnelCertificateResultVpnConnectionRoutes[];
    state?: ModifyVpnTunnelCertificateResultVpnConnectionStateEnum;
    tags?: ModifyVpnTunnelCertificateResultVpnConnectionTags[];
    transitGatewayId?: string;
    type?: ModifyVpnTunnelCertificateResultVpnConnectionTypeEnum;
    vgwTelemetry?: ModifyVpnTunnelCertificateResultVpnConnectionVgwTelemetry[];
    vpnConnectionId?: string;
    vpnGatewayId?: string;
}
/**
 * Success
 */
export declare class ModifyVpnTunnelCertificateResult extends SpeakeasyBase {
    vpnConnection?: ModifyVpnTunnelCertificateResultVpnConnection;
}
