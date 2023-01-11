package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeploymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentArn")
    public String deploymentArn;
    public CreateDeploymentResponse withDeploymentArn(String deploymentArn) {
        this.deploymentArn = deploymentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public String deploymentId;
    public CreateDeploymentResponse withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}