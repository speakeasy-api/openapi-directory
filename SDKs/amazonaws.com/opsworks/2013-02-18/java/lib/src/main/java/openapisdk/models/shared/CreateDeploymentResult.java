package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentResult
 * Contains the response to a <code>CreateDeployment</code> request.
**/
public class CreateDeploymentResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public String deploymentId;
    public CreateDeploymentResult withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}