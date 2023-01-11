package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BlueInstanceTerminationOption
 * Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. 
**/
public class BlueInstanceTerminationOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public InstanceActionEnum action;
    public BlueInstanceTerminationOption withAction(InstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminationWaitTimeInMinutes")
    public Long terminationWaitTimeInMinutes;
    public BlueInstanceTerminationOption withTerminationWaitTimeInMinutes(Long terminationWaitTimeInMinutes) {
        this.terminationWaitTimeInMinutes = terminationWaitTimeInMinutes;
        return this;
    }
}