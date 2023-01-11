package openapisdk.models.shared;



public class DescribeTransitGatewayConnectPeersResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTransitGatewayConnectPeersResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayConnectPeers;
    public DescribeTransitGatewayConnectPeersResult withTransitGatewayConnectPeers(java.util.Map<String, Object> transitGatewayConnectPeers) {
        this.transitGatewayConnectPeers = transitGatewayConnectPeers;
        return this;
    }
}