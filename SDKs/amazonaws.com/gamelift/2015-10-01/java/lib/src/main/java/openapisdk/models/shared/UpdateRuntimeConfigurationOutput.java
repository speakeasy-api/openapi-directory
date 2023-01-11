package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateRuntimeConfigurationOutput
 * Represents the returned data in response to a request operation.
**/
public class UpdateRuntimeConfigurationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuntimeConfiguration")
    public RuntimeConfiguration runtimeConfiguration;
    public UpdateRuntimeConfigurationOutput withRuntimeConfiguration(RuntimeConfiguration runtimeConfiguration) {
        this.runtimeConfiguration = runtimeConfiguration;
        return this;
    }
}