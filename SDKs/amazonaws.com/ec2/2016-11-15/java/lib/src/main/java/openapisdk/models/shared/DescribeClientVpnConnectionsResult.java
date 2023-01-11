package openapisdk.models.shared;



public class DescribeClientVpnConnectionsResult {
    public java.util.Map<String, Object> connections;
    public DescribeClientVpnConnectionsResult withConnections(java.util.Map<String, Object> connections) {
        this.connections = connections;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeClientVpnConnectionsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}