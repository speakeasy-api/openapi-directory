package openapisdk.models.shared;



public class DescribeVpcsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeVpcsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> vpcs;
    public DescribeVpcsResult withVpcs(java.util.Map<String, Object> vpcs) {
        this.vpcs = vpcs;
        return this;
    }
}