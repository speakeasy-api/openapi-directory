package openapisdk.models.shared;



/**
 * CreatePolicyVersionResponse
 * Contains the response to a successful <a>CreatePolicyVersion</a> request. 
**/
public class CreatePolicyVersionResponse {
    public PolicyVersion policyVersion;
    public CreatePolicyVersionResponse withPolicyVersion(PolicyVersion policyVersion) {
        this.policyVersion = policyVersion;
        return this;
    }
}