package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StartConfigurationRecorderRequest
 * The input for the <a>StartConfigurationRecorder</a> action.
**/
public class StartConfigurationRecorderRequest {
    @JsonProperty("ConfigurationRecorderName")
    public String configurationRecorderName;
    public StartConfigurationRecorderRequest withConfigurationRecorderName(String configurationRecorderName) {
        this.configurationRecorderName = configurationRecorderName;
        return this;
    }
}