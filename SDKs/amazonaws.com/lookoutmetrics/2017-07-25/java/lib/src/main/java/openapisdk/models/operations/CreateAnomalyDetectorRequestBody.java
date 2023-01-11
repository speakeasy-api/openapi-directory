package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAnomalyDetectorRequestBody {
    @JsonProperty("AnomalyDetectorConfig")
    public CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig anomalyDetectorConfig;
    public CreateAnomalyDetectorRequestBody withAnomalyDetectorConfig(CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig anomalyDetectorConfig) {
        this.anomalyDetectorConfig = anomalyDetectorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorDescription")
    public String anomalyDetectorDescription;
    public CreateAnomalyDetectorRequestBody withAnomalyDetectorDescription(String anomalyDetectorDescription) {
        this.anomalyDetectorDescription = anomalyDetectorDescription;
        return this;
    }
    @JsonProperty("AnomalyDetectorName")
    public String anomalyDetectorName;
    public CreateAnomalyDetectorRequestBody withAnomalyDetectorName(String anomalyDetectorName) {
        this.anomalyDetectorName = anomalyDetectorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyArn")
    public String kmsKeyArn;
    public CreateAnomalyDetectorRequestBody withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateAnomalyDetectorRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}