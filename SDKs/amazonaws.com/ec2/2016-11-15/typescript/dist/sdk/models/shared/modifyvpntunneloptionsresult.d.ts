import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPN connection options.
**/
export declare class ModifyVpnTunnelOptionsResultVpnConnectionOptions extends SpeakeasyBase {
    enableAcceleration?: Record<string, any>;
    localIpv4NetworkCidr?: Record<string, any>;
    localIpv6NetworkCidr?: Record<string, any>;
    remoteIpv4NetworkCidr?: Record<string, any>;
    remoteIpv6NetworkCidr?: Record<string, any>;
    staticRoutesOnly?: Record<string, any>;
    tunnelInsideIpVersion?: Record<string, any>;
    tunnelOptions?: Record<string, any>;
}
/**
 * Describes a VPN connection.
**/
export declare class ModifyVpnTunnelOptionsResultVpnConnection extends SpeakeasyBase {
    category?: Record<string, any>;
    customerGatewayConfiguration?: Record<string, any>;
    customerGatewayId?: Record<string, any>;
    options?: ModifyVpnTunnelOptionsResultVpnConnectionOptions;
    routes?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    type?: Record<string, any>;
    vgwTelemetry?: Record<string, any>;
    vpnConnectionId?: Record<string, any>;
    vpnGatewayId?: Record<string, any>;
}
export declare class ModifyVpnTunnelOptionsResult extends SpeakeasyBase {
    vpnConnection?: ModifyVpnTunnelOptionsResultVpnConnection;
}
