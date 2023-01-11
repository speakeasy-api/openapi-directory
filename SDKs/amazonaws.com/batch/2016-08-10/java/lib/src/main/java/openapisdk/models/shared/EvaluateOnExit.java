package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EvaluateOnExit
 * Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met.
**/
public class EvaluateOnExit {
    @JsonProperty("action")
    public RetryActionEnum action;
    public EvaluateOnExit withAction(RetryActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onExitCode")
    public String onExitCode;
    public EvaluateOnExit withOnExitCode(String onExitCode) {
        this.onExitCode = onExitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onReason")
    public String onReason;
    public EvaluateOnExit withOnReason(String onReason) {
        this.onReason = onReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onStatusReason")
    public String onStatusReason;
    public EvaluateOnExit withOnStatusReason(String onStatusReason) {
        this.onStatusReason = onStatusReason;
        return this;
    }
}