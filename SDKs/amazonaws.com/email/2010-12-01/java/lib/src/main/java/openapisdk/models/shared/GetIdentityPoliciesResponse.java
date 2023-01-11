package openapisdk.models.shared;



/**
 * GetIdentityPoliciesResponse
 * Represents the requested sending authorization policies.
**/
public class GetIdentityPoliciesResponse {
    public java.util.Map<String, String> policies;
    public GetIdentityPoliciesResponse withPolicies(java.util.Map<String, String> policies) {
        this.policies = policies;
        return this;
    }
}