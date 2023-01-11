package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TracingConfigResponse
 * The function's X-Ray tracing configuration.
**/
public class TracingConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mode")
    public TracingModeEnum mode;
    public TracingConfigResponse withMode(TracingModeEnum mode) {
        this.mode = mode;
        return this;
    }
}