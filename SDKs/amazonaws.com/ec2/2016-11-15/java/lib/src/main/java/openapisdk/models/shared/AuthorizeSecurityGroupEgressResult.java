package openapisdk.models.shared;



public class AuthorizeSecurityGroupEgressResult {
    public java.util.Map<String, Object> return_;
    public AuthorizeSecurityGroupEgressResult withReturn(java.util.Map<String, Object> return_) {
        this.return_ = return_;
        return this;
    }
    public java.util.Map<String, Object> securityGroupRules;
    public AuthorizeSecurityGroupEgressResult withSecurityGroupRules(java.util.Map<String, Object> securityGroupRules) {
        this.securityGroupRules = securityGroupRules;
        return this;
    }
}