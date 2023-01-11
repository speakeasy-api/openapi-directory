package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetThingRuntimeConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuntimeConfiguration")
    public RuntimeConfiguration runtimeConfiguration;
    public GetThingRuntimeConfigurationResponse withRuntimeConfiguration(RuntimeConfiguration runtimeConfiguration) {
        this.runtimeConfiguration = runtimeConfiguration;
        return this;
    }
}