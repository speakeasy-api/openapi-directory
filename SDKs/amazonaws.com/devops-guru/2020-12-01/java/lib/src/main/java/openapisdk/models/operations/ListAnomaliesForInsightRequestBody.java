package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAnomaliesForInsightRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAnomaliesForInsightRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAnomaliesForInsightRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTimeRange")
    public ListAnomaliesForInsightRequestBodyStartTimeRange startTimeRange;
    public ListAnomaliesForInsightRequestBody withStartTimeRange(ListAnomaliesForInsightRequestBodyStartTimeRange startTimeRange) {
        this.startTimeRange = startTimeRange;
        return this;
    }
}