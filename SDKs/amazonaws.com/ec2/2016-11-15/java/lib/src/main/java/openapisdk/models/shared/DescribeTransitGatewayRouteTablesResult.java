package openapisdk.models.shared;



public class DescribeTransitGatewayRouteTablesResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTransitGatewayRouteTablesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayRouteTables;
    public DescribeTransitGatewayRouteTablesResult withTransitGatewayRouteTables(java.util.Map<String, Object> transitGatewayRouteTables) {
        this.transitGatewayRouteTables = transitGatewayRouteTables;
        return this;
    }
}