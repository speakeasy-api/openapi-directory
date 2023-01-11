package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutConfigurationRecorderRequest
 * The input for the <a>PutConfigurationRecorder</a> action.
**/
public class PutConfigurationRecorderRequest {
    @JsonProperty("ConfigurationRecorder")
    public ConfigurationRecorder configurationRecorder;
    public PutConfigurationRecorderRequest withConfigurationRecorder(ConfigurationRecorder configurationRecorder) {
        this.configurationRecorder = configurationRecorder;
        return this;
    }
}