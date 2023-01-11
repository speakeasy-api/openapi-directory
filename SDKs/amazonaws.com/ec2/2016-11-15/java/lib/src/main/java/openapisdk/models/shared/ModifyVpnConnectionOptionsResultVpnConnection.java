package openapisdk.models.shared;



/**
 * ModifyVpnConnectionOptionsResultVpnConnection
 * Describes a VPN connection.
**/
public class ModifyVpnConnectionOptionsResultVpnConnection {
    public java.util.Map<String, Object> category;
    public ModifyVpnConnectionOptionsResultVpnConnection withCategory(java.util.Map<String, Object> category) {
        this.category = category;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayConfiguration;
    public ModifyVpnConnectionOptionsResultVpnConnection withCustomerGatewayConfiguration(java.util.Map<String, Object> customerGatewayConfiguration) {
        this.customerGatewayConfiguration = customerGatewayConfiguration;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayId;
    public ModifyVpnConnectionOptionsResultVpnConnection withCustomerGatewayId(java.util.Map<String, Object> customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    public ModifyVpnConnectionOptionsResultVpnConnectionOptions options;
    public ModifyVpnConnectionOptionsResultVpnConnection withOptions(ModifyVpnConnectionOptionsResultVpnConnectionOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> routes;
    public ModifyVpnConnectionOptionsResultVpnConnection withRoutes(java.util.Map<String, Object> routes) {
        this.routes = routes;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyVpnConnectionOptionsResultVpnConnection withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyVpnConnectionOptionsResultVpnConnection withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public ModifyVpnConnectionOptionsResultVpnConnection withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> type;
    public ModifyVpnConnectionOptionsResultVpnConnection withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
    public java.util.Map<String, Object> vgwTelemetry;
    public ModifyVpnConnectionOptionsResultVpnConnection withVgwTelemetry(java.util.Map<String, Object> vgwTelemetry) {
        this.vgwTelemetry = vgwTelemetry;
        return this;
    }
    public java.util.Map<String, Object> vpnConnectionId;
    public ModifyVpnConnectionOptionsResultVpnConnection withVpnConnectionId(java.util.Map<String, Object> vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
    public java.util.Map<String, Object> vpnGatewayId;
    public ModifyVpnConnectionOptionsResultVpnConnection withVpnGatewayId(java.util.Map<String, Object> vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}