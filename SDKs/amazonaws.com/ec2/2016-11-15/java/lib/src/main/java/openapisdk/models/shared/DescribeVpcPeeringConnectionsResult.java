package openapisdk.models.shared;



public class DescribeVpcPeeringConnectionsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVpcPeeringConnectionsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> vpcPeeringConnections;
    public DescribeVpcPeeringConnectionsResult withVpcPeeringConnections(java.util.Map<String, Object> vpcPeeringConnections) {
        this.vpcPeeringConnections = vpcPeeringConnections;
        return this;
    }
}