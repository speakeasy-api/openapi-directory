package openapisdk.models.shared;



/**
 * ModifyVpnTunnelOptionsResultVpnConnection
 * Describes a VPN connection.
**/
public class ModifyVpnTunnelOptionsResultVpnConnection {
    public java.util.Map<String, Object> category;
    public ModifyVpnTunnelOptionsResultVpnConnection withCategory(java.util.Map<String, Object> category) {
        this.category = category;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayConfiguration;
    public ModifyVpnTunnelOptionsResultVpnConnection withCustomerGatewayConfiguration(java.util.Map<String, Object> customerGatewayConfiguration) {
        this.customerGatewayConfiguration = customerGatewayConfiguration;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayId;
    public ModifyVpnTunnelOptionsResultVpnConnection withCustomerGatewayId(java.util.Map<String, Object> customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    public ModifyVpnTunnelOptionsResultVpnConnectionOptions options;
    public ModifyVpnTunnelOptionsResultVpnConnection withOptions(ModifyVpnTunnelOptionsResultVpnConnectionOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> routes;
    public ModifyVpnTunnelOptionsResultVpnConnection withRoutes(java.util.Map<String, Object> routes) {
        this.routes = routes;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyVpnTunnelOptionsResultVpnConnection withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyVpnTunnelOptionsResultVpnConnection withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public ModifyVpnTunnelOptionsResultVpnConnection withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> type;
    public ModifyVpnTunnelOptionsResultVpnConnection withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
    public java.util.Map<String, Object> vgwTelemetry;
    public ModifyVpnTunnelOptionsResultVpnConnection withVgwTelemetry(java.util.Map<String, Object> vgwTelemetry) {
        this.vgwTelemetry = vgwTelemetry;
        return this;
    }
    public java.util.Map<String, Object> vpnConnectionId;
    public ModifyVpnTunnelOptionsResultVpnConnection withVpnConnectionId(java.util.Map<String, Object> vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
    public java.util.Map<String, Object> vpnGatewayId;
    public ModifyVpnTunnelOptionsResultVpnConnection withVpnGatewayId(java.util.Map<String, Object> vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}