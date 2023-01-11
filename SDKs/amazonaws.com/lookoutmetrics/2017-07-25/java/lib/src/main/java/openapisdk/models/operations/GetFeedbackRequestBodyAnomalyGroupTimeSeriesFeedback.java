package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback
 * An anomalous metric in an anomaly group.
**/
public class GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyGroupId")
    public String anomalyGroupId;
    public GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback withAnomalyGroupId(String anomalyGroupId) {
        this.anomalyGroupId = anomalyGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeSeriesId")
    public String timeSeriesId;
    public GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback withTimeSeriesId(String timeSeriesId) {
        this.timeSeriesId = timeSeriesId;
        return this;
    }
}