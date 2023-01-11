package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SkipWaitTimeForInstanceTerminationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentId")
    public String deploymentId;
    public SkipWaitTimeForInstanceTerminationInput withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}