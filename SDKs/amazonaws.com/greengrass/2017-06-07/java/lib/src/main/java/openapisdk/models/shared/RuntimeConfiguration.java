package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeConfiguration
 * Runtime configuration for a thing.
**/
public class RuntimeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TelemetryConfiguration")
    public TelemetryConfiguration telemetryConfiguration;
    public RuntimeConfiguration withTelemetryConfiguration(TelemetryConfiguration telemetryConfiguration) {
        this.telemetryConfiguration = telemetryConfiguration;
        return this;
    }
}