package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInsightEventsRequestBody {
    @JsonProperty("InsightId")
    public String insightId;
    public GetInsightEventsRequestBody withInsightId(String insightId) {
        this.insightId = insightId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetInsightEventsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetInsightEventsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}