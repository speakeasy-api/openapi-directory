package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuspendedState
 * Specifies whether the scaling activities for a scalable target are in a suspended state. 
**/
public class SuspendedState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamicScalingInSuspended")
    public Boolean dynamicScalingInSuspended;
    public SuspendedState withDynamicScalingInSuspended(Boolean dynamicScalingInSuspended) {
        this.dynamicScalingInSuspended = dynamicScalingInSuspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamicScalingOutSuspended")
    public Boolean dynamicScalingOutSuspended;
    public SuspendedState withDynamicScalingOutSuspended(Boolean dynamicScalingOutSuspended) {
        this.dynamicScalingOutSuspended = dynamicScalingOutSuspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScheduledScalingSuspended")
    public Boolean scheduledScalingSuspended;
    public SuspendedState withScheduledScalingSuspended(Boolean scheduledScalingSuspended) {
        this.scheduledScalingSuspended = scheduledScalingSuspended;
        return this;
    }
}