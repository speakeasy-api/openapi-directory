package openapisdk.models.shared;



public class CreateVpcEndpointServiceConfigurationResult {
    public java.util.Map<String, Object> clientToken;
    public CreateVpcEndpointServiceConfigurationResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateVpcEndpointServiceConfigurationResultServiceConfiguration serviceConfiguration;
    public CreateVpcEndpointServiceConfigurationResult withServiceConfiguration(CreateVpcEndpointServiceConfigurationResultServiceConfiguration serviceConfiguration) {
        this.serviceConfiguration = serviceConfiguration;
        return this;
    }
}