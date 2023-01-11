package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLoggingConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingConfiguration")
    public LoggingConfiguration loggingConfiguration;
    public GetLoggingConfigurationResponse withLoggingConfiguration(LoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
}