package openapisdk.models.shared;



public class DescribeNatGatewaysResult {
    public java.util.Map<String, Object> natGateways;
    public DescribeNatGatewaysResult withNatGateways(java.util.Map<String, Object> natGateways) {
        this.natGateways = natGateways;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeNatGatewaysResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}