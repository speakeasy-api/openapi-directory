package openapisdk.models.shared;



/**
 * DescribeVpcEndpointServicesResult
 * Contains the output of DescribeVpcEndpointServices.
**/
public class DescribeVpcEndpointServicesResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVpcEndpointServicesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> serviceDetails;
    public DescribeVpcEndpointServicesResult withServiceDetails(java.util.Map<String, Object> serviceDetails) {
        this.serviceDetails = serviceDetails;
        return this;
    }
    public java.util.Map<String, Object> serviceNames;
    public DescribeVpcEndpointServicesResult withServiceNames(java.util.Map<String, Object> serviceNames) {
        this.serviceNames = serviceNames;
        return this;
    }
}