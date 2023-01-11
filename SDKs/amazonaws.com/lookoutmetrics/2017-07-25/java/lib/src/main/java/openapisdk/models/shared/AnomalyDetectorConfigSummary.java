package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnomalyDetectorConfigSummary
 * Contains information about a detector's configuration.
**/
public class AnomalyDetectorConfigSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnomalyDetectorFrequency")
    public FrequencyEnum anomalyDetectorFrequency;
    public AnomalyDetectorConfigSummary withAnomalyDetectorFrequency(FrequencyEnum anomalyDetectorFrequency) {
        this.anomalyDetectorFrequency = anomalyDetectorFrequency;
        return this;
    }
}