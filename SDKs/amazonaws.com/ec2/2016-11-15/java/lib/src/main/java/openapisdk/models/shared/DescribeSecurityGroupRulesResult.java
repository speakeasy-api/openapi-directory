package openapisdk.models.shared;



public class DescribeSecurityGroupRulesResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeSecurityGroupRulesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> securityGroupRules;
    public DescribeSecurityGroupRulesResult withSecurityGroupRules(java.util.Map<String, Object> securityGroupRules) {
        this.securityGroupRules = securityGroupRules;
        return this;
    }
}