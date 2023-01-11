package openapisdk.models.shared;



public class TerminateClientVpnConnectionsResult {
    public java.util.Map<String, Object> clientVpnEndpointId;
    public TerminateClientVpnConnectionsResult withClientVpnEndpointId(java.util.Map<String, Object> clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    public java.util.Map<String, Object> connectionStatuses;
    public TerminateClientVpnConnectionsResult withConnectionStatuses(java.util.Map<String, Object> connectionStatuses) {
        this.connectionStatuses = connectionStatuses;
        return this;
    }
    public java.util.Map<String, Object> username;
    public TerminateClientVpnConnectionsResult withUsername(java.util.Map<String, Object> username) {
        this.username = username;
        return this;
    }
}