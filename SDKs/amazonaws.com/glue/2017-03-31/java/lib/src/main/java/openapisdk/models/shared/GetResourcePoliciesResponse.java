package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourcePoliciesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GetResourcePoliciesResponseList")
    public GluePolicy[] getResourcePoliciesResponseList;
    public GetResourcePoliciesResponse withGetResourcePoliciesResponseList(GluePolicy[] getResourcePoliciesResponseList) {
        this.getResourcePoliciesResponseList = getResourcePoliciesResponseList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetResourcePoliciesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}