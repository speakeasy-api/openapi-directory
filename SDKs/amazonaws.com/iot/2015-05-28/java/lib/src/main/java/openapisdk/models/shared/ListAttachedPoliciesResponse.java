package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAttachedPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListAttachedPoliciesResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public Policy[] policies;
    public ListAttachedPoliciesResponse withPolicies(Policy[] policies) {
        this.policies = policies;
        return this;
    }
}