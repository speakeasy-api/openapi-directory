package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFeedbackRequestBody {
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public GetFeedbackRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonProperty("AnomalyGroupTimeSeriesFeedback")
    public GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback anomalyGroupTimeSeriesFeedback;
    public GetFeedbackRequestBody withAnomalyGroupTimeSeriesFeedback(GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback anomalyGroupTimeSeriesFeedback) {
        this.anomalyGroupTimeSeriesFeedback = anomalyGroupTimeSeriesFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetFeedbackRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetFeedbackRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}