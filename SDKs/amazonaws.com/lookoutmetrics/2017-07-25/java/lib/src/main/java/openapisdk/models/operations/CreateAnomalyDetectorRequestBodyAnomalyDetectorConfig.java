package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig
 * Contains information about a detector's configuration.
**/
public class CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorFrequency")
    public openapisdk.models.shared.FrequencyEnum anomalyDetectorFrequency;
    public CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig withAnomalyDetectorFrequency(openapisdk.models.shared.FrequencyEnum anomalyDetectorFrequency) {
        this.anomalyDetectorFrequency = anomalyDetectorFrequency;
        return this;
    }
}