package openapisdk.models.shared;



public class AuthorizeSecurityGroupIngressResult {
    public java.util.Map<String, Object> return_;
    public AuthorizeSecurityGroupIngressResult withReturn(java.util.Map<String, Object> return_) {
        this.return_ = return_;
        return this;
    }
    public java.util.Map<String, Object> securityGroupRules;
    public AuthorizeSecurityGroupIngressResult withSecurityGroupRules(java.util.Map<String, Object> securityGroupRules) {
        this.securityGroupRules = securityGroupRules;
        return this;
    }
}