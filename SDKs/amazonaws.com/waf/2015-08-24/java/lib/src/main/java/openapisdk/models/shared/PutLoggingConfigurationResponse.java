package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutLoggingConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingConfiguration")
    public LoggingConfiguration loggingConfiguration;
    public PutLoggingConfigurationResponse withLoggingConfiguration(LoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
}