package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentGroupOutput
 * Represents the output of a <code>CreateDeploymentGroup</code> operation.
**/
public class CreateDeploymentGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentGroupId")
    public String deploymentGroupId;
    public CreateDeploymentGroupOutput withDeploymentGroupId(String deploymentGroupId) {
        this.deploymentGroupId = deploymentGroupId;
        return this;
    }
}