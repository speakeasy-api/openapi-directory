package openapisdk.models.shared;



public class CreateClientVpnEndpointResult {
    public java.util.Map<String, Object> clientVpnEndpointId;
    public CreateClientVpnEndpointResult withClientVpnEndpointId(java.util.Map<String, Object> clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    public java.util.Map<String, Object> dnsName;
    public CreateClientVpnEndpointResult withDnsName(java.util.Map<String, Object> dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    public CreateClientVpnEndpointResultStatus status;
    public CreateClientVpnEndpointResult withStatus(CreateClientVpnEndpointResultStatus status) {
        this.status = status;
        return this;
    }
}