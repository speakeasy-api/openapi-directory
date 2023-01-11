package openapisdk.models.shared;



/**
 * GetRolePolicyResponse
 * Contains the response to a successful <a>GetRolePolicy</a> request. 
**/
public class GetRolePolicyResponse {
    public String policyDocument;
    public GetRolePolicyResponse withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    public String policyName;
    public GetRolePolicyResponse withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    public String roleName;
    public GetRolePolicyResponse withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
}