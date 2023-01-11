package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopDeploymentInput
 *  Represents the input of a <code>StopDeployment</code> operation. 
**/
public class StopDeploymentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRollbackEnabled")
    public Boolean autoRollbackEnabled;
    public StopDeploymentInput withAutoRollbackEnabled(Boolean autoRollbackEnabled) {
        this.autoRollbackEnabled = autoRollbackEnabled;
        return this;
    }
    @JsonProperty("deploymentId")
    public String deploymentId;
    public StopDeploymentInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}