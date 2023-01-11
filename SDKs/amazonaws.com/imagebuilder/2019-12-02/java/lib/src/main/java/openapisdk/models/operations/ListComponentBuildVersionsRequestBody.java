package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListComponentBuildVersionsRequestBody {
    @JsonProperty("componentVersionArn")
    public String componentVersionArn;
    public ListComponentBuildVersionsRequestBody withComponentVersionArn(String componentVersionArn) {
        this.componentVersionArn = componentVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListComponentBuildVersionsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListComponentBuildVersionsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}