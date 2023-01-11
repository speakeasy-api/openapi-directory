package openapisdk.models.shared;



/**
 * GetAccountPasswordPolicyResponse
 * Contains the response to a successful <a>GetAccountPasswordPolicy</a> request. 
**/
public class GetAccountPasswordPolicyResponse {
    public PasswordPolicy passwordPolicy;
    public GetAccountPasswordPolicyResponse withPasswordPolicy(PasswordPolicy passwordPolicy) {
        this.passwordPolicy = passwordPolicy;
        return this;
    }
}