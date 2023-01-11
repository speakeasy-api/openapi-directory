package openapisdk.models.shared;



/**
 * CreateVpnGatewayResult
 * Contains the output of CreateVpnGateway.
**/
public class CreateVpnGatewayResult {
    public CreateVpnGatewayResultVpnGateway vpnGateway;
    public CreateVpnGatewayResult withVpnGateway(CreateVpnGatewayResultVpnGateway vpnGateway) {
        this.vpnGateway = vpnGateway;
        return this;
    }
}