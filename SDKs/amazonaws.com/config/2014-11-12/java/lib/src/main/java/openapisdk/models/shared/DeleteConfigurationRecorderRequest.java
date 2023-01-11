package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteConfigurationRecorderRequest
 * The request object for the <code>DeleteConfigurationRecorder</code> action.
**/
public class DeleteConfigurationRecorderRequest {
    @JsonProperty("ConfigurationRecorderName")
    public String configurationRecorderName;
    public DeleteConfigurationRecorderRequest withConfigurationRecorderName(String configurationRecorderName) {
        this.configurationRecorderName = configurationRecorderName;
        return this;
    }
}