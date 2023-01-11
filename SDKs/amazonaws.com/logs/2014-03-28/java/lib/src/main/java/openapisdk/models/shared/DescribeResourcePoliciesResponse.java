package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeResourcePoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeResourcePoliciesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcePolicies")
    public ResourcePolicy[] resourcePolicies;
    public DescribeResourcePoliciesResponse withResourcePolicies(ResourcePolicy[] resourcePolicies) {
        this.resourcePolicies = resourcePolicies;
        return this;
    }
}