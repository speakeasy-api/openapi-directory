package openapisdk.models.shared;



/**
 * CreateVpcEndpointResult
 * Contains the output of CreateVpcEndpoint.
**/
public class CreateVpcEndpointResult {
    public java.util.Map<String, Object> clientToken;
    public CreateVpcEndpointResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateVpcEndpointResultVpcEndpoint vpcEndpoint;
    public CreateVpcEndpointResult withVpcEndpoint(CreateVpcEndpointResultVpcEndpoint vpcEndpoint) {
        this.vpcEndpoint = vpcEndpoint;
        return this;
    }
}