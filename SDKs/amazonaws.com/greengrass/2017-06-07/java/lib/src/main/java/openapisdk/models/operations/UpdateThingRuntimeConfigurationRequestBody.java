package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateThingRuntimeConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TelemetryConfiguration")
    public UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration telemetryConfiguration;
    public UpdateThingRuntimeConfigurationRequestBody withTelemetryConfiguration(UpdateThingRuntimeConfigurationRequestBodyTelemetryConfiguration telemetryConfiguration) {
        this.telemetryConfiguration = telemetryConfiguration;
        return this;
    }
}