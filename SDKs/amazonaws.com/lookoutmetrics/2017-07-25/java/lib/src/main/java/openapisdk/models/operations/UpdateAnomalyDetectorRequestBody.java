package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAnomalyDetectorRequestBody {
    @JsonProperty("AnomalyDetectorArn")
    public String anomalyDetectorArn;
    public UpdateAnomalyDetectorRequestBody withAnomalyDetectorArn(String anomalyDetectorArn) {
        this.anomalyDetectorArn = anomalyDetectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorConfig")
    public UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig anomalyDetectorConfig;
    public UpdateAnomalyDetectorRequestBody withAnomalyDetectorConfig(UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig anomalyDetectorConfig) {
        this.anomalyDetectorConfig = anomalyDetectorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorDescription")
    public String anomalyDetectorDescription;
    public UpdateAnomalyDetectorRequestBody withAnomalyDetectorDescription(String anomalyDetectorDescription) {
        this.anomalyDetectorDescription = anomalyDetectorDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyArn")
    public String kmsKeyArn;
    public UpdateAnomalyDetectorRequestBody withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
}