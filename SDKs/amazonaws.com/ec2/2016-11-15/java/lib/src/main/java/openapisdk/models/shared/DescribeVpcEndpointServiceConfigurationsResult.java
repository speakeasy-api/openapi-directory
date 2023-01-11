package openapisdk.models.shared;



public class DescribeVpcEndpointServiceConfigurationsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVpcEndpointServiceConfigurationsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> serviceConfigurations;
    public DescribeVpcEndpointServiceConfigurationsResult withServiceConfigurations(java.util.Map<String, Object> serviceConfigurations) {
        this.serviceConfigurations = serviceConfigurations;
        return this;
    }
}