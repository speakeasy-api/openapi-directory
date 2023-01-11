package openapisdk.models.shared;



/**
 * DescribeVpcEndpointsResult
 * Contains the output of DescribeVpcEndpoints.
**/
public class DescribeVpcEndpointsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVpcEndpointsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> vpcEndpoints;
    public DescribeVpcEndpointsResult withVpcEndpoints(java.util.Map<String, Object> vpcEndpoints) {
        this.vpcEndpoints = vpcEndpoints;
        return this;
    }
}