package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeploymentGroupOutput
 * Represents the output of an <code>UpdateDeploymentGroup</code> operation.
**/
public class UpdateDeploymentGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hooksNotCleanedUp")
    public AutoScalingGroup[] hooksNotCleanedUp;
    public UpdateDeploymentGroupOutput withHooksNotCleanedUp(AutoScalingGroup[] hooksNotCleanedUp) {
        this.hooksNotCleanedUp = hooksNotCleanedUp;
        return this;
    }
}