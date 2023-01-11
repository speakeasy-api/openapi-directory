package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAlertsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public ListAlertsRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAlertsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAlertsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}