package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBlueprintRunsRequest {
    @JsonProperty("BlueprintName")
    public String blueprintName;
    public GetBlueprintRunsRequest withBlueprintName(String blueprintName) {
        this.blueprintName = blueprintName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetBlueprintRunsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetBlueprintRunsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}