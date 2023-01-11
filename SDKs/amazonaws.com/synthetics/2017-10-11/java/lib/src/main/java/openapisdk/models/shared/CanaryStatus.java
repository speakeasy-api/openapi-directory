package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CanaryStatus
 * A structure that contains the current state of the canary.
**/
public class CanaryStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public CanaryStateEnum state;
    public CanaryStatus withState(CanaryStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public CanaryStatus withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReasonCode")
    public CanaryStateReasonCodeEnum stateReasonCode;
    public CanaryStatus withStateReasonCode(CanaryStateReasonCodeEnum stateReasonCode) {
        this.stateReasonCode = stateReasonCode;
        return this;
    }
}