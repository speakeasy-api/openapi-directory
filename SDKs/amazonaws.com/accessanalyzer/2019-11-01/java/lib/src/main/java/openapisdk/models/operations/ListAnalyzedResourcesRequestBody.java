package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAnalyzedResourcesRequestBody {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public ListAnalyzedResourcesRequestBody withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListAnalyzedResourcesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAnalyzedResourcesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ListAnalyzedResourcesRequestBodyResourceTypeEnum resourceType;
    public ListAnalyzedResourcesRequestBody withResourceType(ListAnalyzedResourcesRequestBodyResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}