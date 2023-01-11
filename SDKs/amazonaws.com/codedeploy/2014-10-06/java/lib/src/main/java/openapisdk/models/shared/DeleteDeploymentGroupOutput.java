package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteDeploymentGroupOutput
 * Represents the output of a <code>DeleteDeploymentGroup</code> operation.
**/
public class DeleteDeploymentGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hooksNotCleanedUp")
    public AutoScalingGroup[] hooksNotCleanedUp;
    public DeleteDeploymentGroupOutput withHooksNotCleanedUp(AutoScalingGroup[] hooksNotCleanedUp) {
        this.hooksNotCleanedUp = hooksNotCleanedUp;
        return this;
    }
}