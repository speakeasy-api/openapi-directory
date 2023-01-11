package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Allowed
 * Contains information that allowed the authorization.
**/
public class Allowed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public Policy[] policies;
    public Allowed withPolicies(Policy[] policies) {
        this.policies = policies;
        return this;
    }
}