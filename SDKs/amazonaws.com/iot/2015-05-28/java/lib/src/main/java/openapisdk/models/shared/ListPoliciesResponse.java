package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPoliciesResponse
 * The output from the ListPolicies operation.
**/
public class ListPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListPoliciesResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policies")
    public Policy[] policies;
    public ListPoliciesResponse withPolicies(Policy[] policies) {
        this.policies = policies;
        return this;
    }
}