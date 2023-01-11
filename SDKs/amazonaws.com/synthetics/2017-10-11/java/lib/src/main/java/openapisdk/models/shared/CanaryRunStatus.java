package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CanaryRunStatus
 * This structure contains the status information about a canary run.
**/
public class CanaryRunStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public CanaryRunStateEnum state;
    public CanaryRunStatus withState(CanaryRunStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public CanaryRunStatus withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReasonCode")
    public CanaryRunStateReasonCodeEnum stateReasonCode;
    public CanaryRunStatus withStateReasonCode(CanaryRunStateReasonCodeEnum stateReasonCode) {
        this.stateReasonCode = stateReasonCode;
        return this;
    }
}