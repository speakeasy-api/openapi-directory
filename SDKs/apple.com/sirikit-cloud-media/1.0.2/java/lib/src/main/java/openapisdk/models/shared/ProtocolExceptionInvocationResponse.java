package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProtocolExceptionInvocationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debug")
    public String debug;
    public ProtocolExceptionInvocationResponse withDebug(String debug) {
        this.debug = debug;
        return this;
    }
    @JsonProperty("exception")
    public ProtocolException exception;
    public ProtocolExceptionInvocationResponse withException(ProtocolException exception) {
        this.exception = exception;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public ProtocolExceptionInvocationResponse withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public ExecutionMetrics metrics;
    public ProtocolExceptionInvocationResponse withMetrics(ExecutionMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonProperty("result")
    public java.util.Map<String, Object> result;
    public ProtocolExceptionInvocationResponse withResult(java.util.Map<String, Object> result) {
        this.result = result;
        return this;
    }
}