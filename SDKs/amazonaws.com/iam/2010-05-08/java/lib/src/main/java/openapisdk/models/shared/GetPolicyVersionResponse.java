package openapisdk.models.shared;



/**
 * GetPolicyVersionResponse
 * Contains the response to a successful <a>GetPolicyVersion</a> request. 
**/
public class GetPolicyVersionResponse {
    public PolicyVersion policyVersion;
    public GetPolicyVersionResponse withPolicyVersion(PolicyVersion policyVersion) {
        this.policyVersion = policyVersion;
        return this;
    }
}