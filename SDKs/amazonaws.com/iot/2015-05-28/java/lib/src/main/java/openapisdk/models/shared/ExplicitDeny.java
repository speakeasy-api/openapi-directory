package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExplicitDeny
 * Information that explicitly denies authorization.
**/
public class ExplicitDeny {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public Policy[] policies;
    public ExplicitDeny withPolicies(Policy[] policies) {
        this.policies = policies;
        return this;
    }
}