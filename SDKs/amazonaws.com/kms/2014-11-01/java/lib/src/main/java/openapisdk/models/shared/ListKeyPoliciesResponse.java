package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListKeyPoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListKeyPoliciesResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyNames")
    public String[] policyNames;
    public ListKeyPoliciesResponse withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Truncated")
    public Boolean truncated;
    public ListKeyPoliciesResponse withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
}