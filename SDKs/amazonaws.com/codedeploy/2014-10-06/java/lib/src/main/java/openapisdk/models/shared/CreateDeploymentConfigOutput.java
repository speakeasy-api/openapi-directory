package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentConfigOutput
 * Represents the output of a <code>CreateDeploymentConfig</code> operation.
**/
public class CreateDeploymentConfigOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfigId")
    public String deploymentConfigId;
    public CreateDeploymentConfigOutput withDeploymentConfigId(String deploymentConfigId) {
        this.deploymentConfigId = deploymentConfigId;
        return this;
    }
}