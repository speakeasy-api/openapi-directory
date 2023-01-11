package openapisdk.models.shared;



public class DescribeTransitGatewaysResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTransitGatewaysResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> transitGateways;
    public DescribeTransitGatewaysResult withTransitGateways(java.util.Map<String, Object> transitGateways) {
        this.transitGateways = transitGateways;
        return this;
    }
}