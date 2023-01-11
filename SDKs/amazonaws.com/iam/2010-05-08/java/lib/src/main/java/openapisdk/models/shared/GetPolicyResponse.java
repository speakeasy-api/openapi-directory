package openapisdk.models.shared;



/**
 * GetPolicyResponse
 * Contains the response to a successful <a>GetPolicy</a> request. 
**/
public class GetPolicyResponse {
    public Policy policy;
    public GetPolicyResponse withPolicy(Policy policy) {
        this.policy = policy;
        return this;
    }
}