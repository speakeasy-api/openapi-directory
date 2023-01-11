package openapisdk.models.shared;



/**
 * CreatePolicyResponse
 * Contains the response to a successful <a>CreatePolicy</a> request. 
**/
public class CreatePolicyResponse {
    public Policy policy;
    public CreatePolicyResponse withPolicy(Policy policy) {
        this.policy = policy;
        return this;
    }
}