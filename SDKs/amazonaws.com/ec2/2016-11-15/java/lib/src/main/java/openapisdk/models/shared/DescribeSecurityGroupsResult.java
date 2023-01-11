package openapisdk.models.shared;



public class DescribeSecurityGroupsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeSecurityGroupsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> securityGroups;
    public DescribeSecurityGroupsResult withSecurityGroups(java.util.Map<String, Object> securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
}