package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPolicyGenerationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPolicyGenerationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("policyGenerations")
    public PolicyGeneration[] policyGenerations;
    public ListPolicyGenerationsResponse withPolicyGenerations(PolicyGeneration[] policyGenerations) {
        this.policyGenerations = policyGenerations;
        return this;
    }
}