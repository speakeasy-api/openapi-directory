package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeRuntimeConfigurationOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeRuntimeConfigurationOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuntimeConfiguration")
    public RuntimeConfiguration runtimeConfiguration;
    public DescribeRuntimeConfigurationOutput withRuntimeConfiguration(RuntimeConfiguration runtimeConfiguration) {
        this.runtimeConfiguration = runtimeConfiguration;
        return this;
    }
}