package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsLambdaFunctionTracingConfig
 * The function's X-Ray tracing configuration.
**/
public class AwsLambdaFunctionTracingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mode")
    public String mode;
    public AwsLambdaFunctionTracingConfig withMode(String mode) {
        this.mode = mode;
        return this;
    }
}