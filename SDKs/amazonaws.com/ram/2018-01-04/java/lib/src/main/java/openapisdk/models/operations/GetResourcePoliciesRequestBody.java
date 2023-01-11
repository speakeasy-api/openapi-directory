package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourcePoliciesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetResourcePoliciesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourcePoliciesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public GetResourcePoliciesRequestBody withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonProperty("resourceArns")
    public String[] resourceArns;
    public GetResourcePoliciesRequestBody withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
}