package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration
 * Configuration settings for running telemetry.
**/
public class UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Telemetry")
    public openapisdk.models.shared.TelemetryEnum telemetry;
    public UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration withTelemetry(openapisdk.models.shared.TelemetryEnum telemetry) {
        this.telemetry = telemetry;
        return this;
    }
}