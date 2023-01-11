package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback
 * Feedback for an anomalous metric.
**/
public class PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyGroupId")
    public String anomalyGroupId;
    public PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback withAnomalyGroupId(String anomalyGroupId) {
        this.anomalyGroupId = anomalyGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsAnomaly")
    public Boolean isAnomaly;
    public PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback withIsAnomaly(Boolean isAnomaly) {
        this.isAnomaly = isAnomaly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeSeriesId")
    public String timeSeriesId;
    public PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback withTimeSeriesId(String timeSeriesId) {
        this.timeSeriesId = timeSeriesId;
        return this;
    }
}