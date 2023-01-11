package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActivateAnomalyDetectorRequestBody {
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public ActivateAnomalyDetectorRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
}