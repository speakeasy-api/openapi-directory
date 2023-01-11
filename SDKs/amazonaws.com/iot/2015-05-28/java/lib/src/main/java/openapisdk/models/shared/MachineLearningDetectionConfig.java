package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MachineLearningDetectionConfig
 *  The configuration of an ML Detect Security Profile. 
**/
public class MachineLearningDetectionConfig {
    @JsonProperty("confidenceLevel")
    public ConfidenceLevelEnum confidenceLevel;
    public MachineLearningDetectionConfig withConfidenceLevel(ConfidenceLevelEnum confidenceLevel) {
        this.confidenceLevel = confidenceLevel;
        return this;
    }
}