package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFunctionRequestBodyTracingConfig
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.
**/
public class CreateFunctionRequestBodyTracingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mode")
    public openapisdk.models.shared.TracingModeEnum mode;
    public CreateFunctionRequestBodyTracingConfig withMode(openapisdk.models.shared.TracingModeEnum mode) {
        this.mode = mode;
        return this;
    }
}