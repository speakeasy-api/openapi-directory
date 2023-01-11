package openapisdk.models.shared;



public class GetAssociatedIpv6PoolCidrsResult {
    public java.util.Map<String, Object> ipv6CidrAssociations;
    public GetAssociatedIpv6PoolCidrsResult withIpv6CidrAssociations(java.util.Map<String, Object> ipv6CidrAssociations) {
        this.ipv6CidrAssociations = ipv6CidrAssociations;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public GetAssociatedIpv6PoolCidrsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}