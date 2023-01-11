package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopConfigurationRecorderRequest
 * The input for the <a>StopConfigurationRecorder</a> action.
**/
public class StopConfigurationRecorderRequest {
    @JsonProperty("ConfigurationRecorderName")
    public String configurationRecorderName;
    public StopConfigurationRecorderRequest withConfigurationRecorderName(String configurationRecorderName) {
        this.configurationRecorderName = configurationRecorderName;
        return this;
    }
}