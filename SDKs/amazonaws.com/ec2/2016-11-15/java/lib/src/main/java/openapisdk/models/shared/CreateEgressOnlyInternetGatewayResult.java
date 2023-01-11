package openapisdk.models.shared;



public class CreateEgressOnlyInternetGatewayResult {
    public java.util.Map<String, Object> clientToken;
    public CreateEgressOnlyInternetGatewayResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway egressOnlyInternetGateway;
    public CreateEgressOnlyInternetGatewayResult withEgressOnlyInternetGateway(CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway egressOnlyInternetGateway) {
        this.egressOnlyInternetGateway = egressOnlyInternetGateway;
        return this;
    }
}