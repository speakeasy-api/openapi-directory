package openapisdk.models.shared;



public class DescribeSubnetsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeSubnetsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> subnets;
    public DescribeSubnetsResult withSubnets(java.util.Map<String, Object> subnets) {
        this.subnets = subnets;
        return this;
    }
}