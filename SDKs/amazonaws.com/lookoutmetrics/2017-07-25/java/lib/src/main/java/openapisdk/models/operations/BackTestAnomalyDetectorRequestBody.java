package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BackTestAnomalyDetectorRequestBody {
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public BackTestAnomalyDetectorRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
}