package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoggingConfigurationRequest {
    @JsonProperty("LoggingConfiguration")
    public LoggingConfiguration loggingConfiguration;
    public PutLoggingConfigurationRequest withLoggingConfiguration(LoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
}