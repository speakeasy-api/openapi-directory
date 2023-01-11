package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddMediaIntentHandlingConfirmInvocationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debug")
    public String debug;
    public AddMediaIntentHandlingConfirmInvocationResponse withDebug(String debug) {
        this.debug = debug;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public AddMediaIntentHandlingConfirmInvocationResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public ExecutionMetrics metrics;
    public AddMediaIntentHandlingConfirmInvocationResponse withMetrics(ExecutionMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonProperty("result")
    public java.util.Map<String, Object> result;
    public AddMediaIntentHandlingConfirmInvocationResponse withResult(java.util.Map<String, Object> result) {
        this.result = result;
        return this;
    }
}