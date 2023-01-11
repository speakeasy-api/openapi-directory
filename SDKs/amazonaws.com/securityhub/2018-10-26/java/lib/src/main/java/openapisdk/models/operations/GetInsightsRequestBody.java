package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInsightsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightArns")
    public String[] insightArns;
    public GetInsightsRequestBody withInsightArns(String[] insightArns) {
        this.insightArns = insightArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetInsightsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetInsightsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}