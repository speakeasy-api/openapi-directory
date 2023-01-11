package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourcePoliciesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourcePoliciesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("resourcePolicies")
    public ResourcePolicy[] resourcePolicies;
    public GetResourcePoliciesOutput withResourcePolicies(ResourcePolicy[] resourcePolicies) {
        this.resourcePolicies = resourcePolicies;
        return this;
    }
}