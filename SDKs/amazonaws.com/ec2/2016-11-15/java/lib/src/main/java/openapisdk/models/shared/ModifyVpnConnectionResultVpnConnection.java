package openapisdk.models.shared;



/**
 * ModifyVpnConnectionResultVpnConnection
 * Describes a VPN connection.
**/
public class ModifyVpnConnectionResultVpnConnection {
    public java.util.Map<String, Object> category;
    public ModifyVpnConnectionResultVpnConnection withCategory(java.util.Map<String, Object> category) {
        this.category = category;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayConfiguration;
    public ModifyVpnConnectionResultVpnConnection withCustomerGatewayConfiguration(java.util.Map<String, Object> customerGatewayConfiguration) {
        this.customerGatewayConfiguration = customerGatewayConfiguration;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayId;
    public ModifyVpnConnectionResultVpnConnection withCustomerGatewayId(java.util.Map<String, Object> customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    public ModifyVpnConnectionResultVpnConnectionOptions options;
    public ModifyVpnConnectionResultVpnConnection withOptions(ModifyVpnConnectionResultVpnConnectionOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> routes;
    public ModifyVpnConnectionResultVpnConnection withRoutes(java.util.Map<String, Object> routes) {
        this.routes = routes;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyVpnConnectionResultVpnConnection withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyVpnConnectionResultVpnConnection withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public ModifyVpnConnectionResultVpnConnection withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> type;
    public ModifyVpnConnectionResultVpnConnection withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
    public java.util.Map<String, Object> vgwTelemetry;
    public ModifyVpnConnectionResultVpnConnection withVgwTelemetry(java.util.Map<String, Object> vgwTelemetry) {
        this.vgwTelemetry = vgwTelemetry;
        return this;
    }
    public java.util.Map<String, Object> vpnConnectionId;
    public ModifyVpnConnectionResultVpnConnection withVpnConnectionId(java.util.Map<String, Object> vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
    public java.util.Map<String, Object> vpnGatewayId;
    public ModifyVpnConnectionResultVpnConnection withVpnGatewayId(java.util.Map<String, Object> vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}