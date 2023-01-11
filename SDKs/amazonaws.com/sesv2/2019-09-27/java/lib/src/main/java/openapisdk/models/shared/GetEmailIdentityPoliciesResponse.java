package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetEmailIdentityPoliciesResponse
 * Identity policies associated with email identity.
**/
public class GetEmailIdentityPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policies")
    public java.util.Map<String, String> policies;
    public GetEmailIdentityPoliciesResponse withPolicies(java.util.Map<String, String> policies) {
        this.policies = policies;
        return this;
    }
}