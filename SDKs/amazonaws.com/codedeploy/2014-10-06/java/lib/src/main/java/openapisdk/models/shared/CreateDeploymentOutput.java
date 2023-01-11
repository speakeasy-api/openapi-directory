package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentOutput
 *  Represents the output of a <code>CreateDeployment</code> operation. 
**/
public class CreateDeploymentOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public CreateDeploymentOutput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}