package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutFeedbackRequestBody {
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public PutFeedbackRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonProperty("AnomalyGroupTimeSeriesFeedback")
    public PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback anomalyGroupTimeSeriesFeedback;
    public PutFeedbackRequestBody withAnomalyGroupTimeSeriesFeedback(PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback anomalyGroupTimeSeriesFeedback) {
        this.anomalyGroupTimeSeriesFeedback = anomalyGroupTimeSeriesFeedback;
        return this;
    }
}