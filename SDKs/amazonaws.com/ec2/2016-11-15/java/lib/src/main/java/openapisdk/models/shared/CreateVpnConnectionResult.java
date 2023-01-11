package openapisdk.models.shared;



/**
 * CreateVpnConnectionResult
 * Contains the output of CreateVpnConnection.
**/
public class CreateVpnConnectionResult {
    public CreateVpnConnectionResultVpnConnection vpnConnection;
    public CreateVpnConnectionResult withVpnConnection(CreateVpnConnectionResultVpnConnection vpnConnection) {
        this.vpnConnection = vpnConnection;
        return this;
    }
}