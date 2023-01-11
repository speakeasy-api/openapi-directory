package openapisdk.models.shared;



public class CreateNatGatewayResult {
    public java.util.Map<String, Object> clientToken;
    public CreateNatGatewayResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateNatGatewayResultNatGateway natGateway;
    public CreateNatGatewayResult withNatGateway(CreateNatGatewayResultNatGateway natGateway) {
        this.natGateway = natGateway;
        return this;
    }
}