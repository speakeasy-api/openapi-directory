package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAnalyzedResourcesResponse
 * The response to the request.
**/
public class ListAnalyzedResourcesResponse {
    @JsonProperty("analyzedResources")
    public AnalyzedResourceSummary[] analyzedResources;
    public ListAnalyzedResourcesResponse withAnalyzedResources(AnalyzedResourceSummary[] analyzedResources) {
        this.analyzedResources = analyzedResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAnalyzedResourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}