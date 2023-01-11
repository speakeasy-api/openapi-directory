package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAnomalyGroupRequestBody {
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public GetAnomalyGroupRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonProperty("AnomalyGroupId")
    public String anomalyGroupId;
    public GetAnomalyGroupRequestBody withAnomalyGroupId(String anomalyGroupId) {
        this.anomalyGroupId = anomalyGroupId;
        return this;
    }
}