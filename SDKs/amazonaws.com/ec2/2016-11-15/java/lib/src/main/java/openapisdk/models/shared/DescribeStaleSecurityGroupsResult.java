package openapisdk.models.shared;



public class DescribeStaleSecurityGroupsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeStaleSecurityGroupsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> staleSecurityGroupSet;
    public DescribeStaleSecurityGroupsResult withStaleSecurityGroupSet(java.util.Map<String, Object> staleSecurityGroupSet) {
        this.staleSecurityGroupSet = staleSecurityGroupSet;
        return this;
    }
}