package openapisdk.models.shared;



/**
 * ModifyVpnTunnelCertificateResultVpnConnection
 * Describes a VPN connection.
**/
public class ModifyVpnTunnelCertificateResultVpnConnection {
    public java.util.Map<String, Object> category;
    public ModifyVpnTunnelCertificateResultVpnConnection withCategory(java.util.Map<String, Object> category) {
        this.category = category;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayConfiguration;
    public ModifyVpnTunnelCertificateResultVpnConnection withCustomerGatewayConfiguration(java.util.Map<String, Object> customerGatewayConfiguration) {
        this.customerGatewayConfiguration = customerGatewayConfiguration;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayId;
    public ModifyVpnTunnelCertificateResultVpnConnection withCustomerGatewayId(java.util.Map<String, Object> customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    public ModifyVpnTunnelCertificateResultVpnConnectionOptions options;
    public ModifyVpnTunnelCertificateResultVpnConnection withOptions(ModifyVpnTunnelCertificateResultVpnConnectionOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> routes;
    public ModifyVpnTunnelCertificateResultVpnConnection withRoutes(java.util.Map<String, Object> routes) {
        this.routes = routes;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyVpnTunnelCertificateResultVpnConnection withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyVpnTunnelCertificateResultVpnConnection withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public ModifyVpnTunnelCertificateResultVpnConnection withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> type;
    public ModifyVpnTunnelCertificateResultVpnConnection withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
    public java.util.Map<String, Object> vgwTelemetry;
    public ModifyVpnTunnelCertificateResultVpnConnection withVgwTelemetry(java.util.Map<String, Object> vgwTelemetry) {
        this.vgwTelemetry = vgwTelemetry;
        return this;
    }
    public java.util.Map<String, Object> vpnConnectionId;
    public ModifyVpnTunnelCertificateResultVpnConnection withVpnConnectionId(java.util.Map<String, Object> vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
    public java.util.Map<String, Object> vpnGatewayId;
    public ModifyVpnTunnelCertificateResultVpnConnection withVpnGatewayId(java.util.Map<String, Object> vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}