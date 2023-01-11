package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProtocolException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public ProtocolException withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodIndex")
    public Long methodIndex;
    public ProtocolException withMethodIndex(Long methodIndex) {
        this.methodIndex = methodIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("methodName")
    public String methodName;
    public ProtocolException withMethodName(String methodName) {
        this.methodName = methodName;
        return this;
    }
    @JsonProperty("reason")
    public ProtocolExceptionReasonEnum reason;
    public ProtocolException withReason(ProtocolExceptionReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryWithDelay")
    public Float retryWithDelay;
    public ProtocolException withRetryWithDelay(Float retryWithDelay) {
        this.retryWithDelay = retryWithDelay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trace")
    public String[] trace;
    public ProtocolException withTrace(String[] trace) {
        this.trace = trace;
        return this;
    }
}