package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLoggingConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingConfigurations")
    public LoggingConfiguration[] loggingConfigurations;
    public ListLoggingConfigurationsResponse withLoggingConfigurations(LoggingConfiguration[] loggingConfigurations) {
        this.loggingConfigurations = loggingConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListLoggingConfigurationsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}