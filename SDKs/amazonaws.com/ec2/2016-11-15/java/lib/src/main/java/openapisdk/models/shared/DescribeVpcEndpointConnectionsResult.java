package openapisdk.models.shared;



public class DescribeVpcEndpointConnectionsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVpcEndpointConnectionsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> vpcEndpointConnections;
    public DescribeVpcEndpointConnectionsResult withVpcEndpointConnections(java.util.Map<String, Object> vpcEndpointConnections) {
        this.vpcEndpointConnections = vpcEndpointConnections;
        return this;
    }
}