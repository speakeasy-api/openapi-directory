package openapisdk.models.shared;



public class DescribeNetworkAclsResult {
    public java.util.Map<String, Object> networkAcls;
    public DescribeNetworkAclsResult withNetworkAcls(java.util.Map<String, Object> networkAcls) {
        this.networkAcls = networkAcls;
        return this;
    }
    public java.util.Map<String, Object> nextToken;
    public DescribeNetworkAclsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}