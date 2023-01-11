package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigurationStatus
 * Contains current status information for the configuration.
**/
public class ConfigurationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ConfigurationErrorDetails error;
    public ConfigurationStatus withError(ConfigurationErrorDetails error) {
        this.error = error;
        return this;
    }
    @JsonProperty("state")
    public ConfigurationStateEnum state;
    public ConfigurationStatus withState(ConfigurationStateEnum state) {
        this.state = state;
        return this;
    }
}