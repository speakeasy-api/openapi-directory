package openapisdk.models.shared;



public class DescribePublicIpv4PoolsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribePublicIpv4PoolsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> publicIpv4Pools;
    public DescribePublicIpv4PoolsResult withPublicIpv4Pools(java.util.Map<String, Object> publicIpv4Pools) {
        this.publicIpv4Pools = publicIpv4Pools;
        return this;
    }
}