package openapisdk.models.shared;



/**
 * CreateVpnConnectionResultVpnConnection
 * Information about the VPN connection.
**/
public class CreateVpnConnectionResultVpnConnection {
    public java.util.Map<String, Object> category;
    public CreateVpnConnectionResultVpnConnection withCategory(java.util.Map<String, Object> category) {
        this.category = category;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayConfiguration;
    public CreateVpnConnectionResultVpnConnection withCustomerGatewayConfiguration(java.util.Map<String, Object> customerGatewayConfiguration) {
        this.customerGatewayConfiguration = customerGatewayConfiguration;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayId;
    public CreateVpnConnectionResultVpnConnection withCustomerGatewayId(java.util.Map<String, Object> customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    public CreateVpnConnectionResultVpnConnectionOptions options;
    public CreateVpnConnectionResultVpnConnection withOptions(CreateVpnConnectionResultVpnConnectionOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> routes;
    public CreateVpnConnectionResultVpnConnection withRoutes(java.util.Map<String, Object> routes) {
        this.routes = routes;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateVpnConnectionResultVpnConnection withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateVpnConnectionResultVpnConnection withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public CreateVpnConnectionResultVpnConnection withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> type;
    public CreateVpnConnectionResultVpnConnection withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
    public java.util.Map<String, Object> vgwTelemetry;
    public CreateVpnConnectionResultVpnConnection withVgwTelemetry(java.util.Map<String, Object> vgwTelemetry) {
        this.vgwTelemetry = vgwTelemetry;
        return this;
    }
    public java.util.Map<String, Object> vpnConnectionId;
    public CreateVpnConnectionResultVpnConnection withVpnConnectionId(java.util.Map<String, Object> vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
    public java.util.Map<String, Object> vpnGatewayId;
    public CreateVpnConnectionResultVpnConnection withVpnGatewayId(java.util.Map<String, Object> vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}