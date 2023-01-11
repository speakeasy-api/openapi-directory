package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig
 * Contains information about a detector's configuration.
**/
public class UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorFrequency")
    public openapisdk.models.shared.FrequencyEnum anomalyDetectorFrequency;
    public UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig withAnomalyDetectorFrequency(openapisdk.models.shared.FrequencyEnum anomalyDetectorFrequency) {
        this.anomalyDetectorFrequency = anomalyDetectorFrequency;
        return this;
    }
}