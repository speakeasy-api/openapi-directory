package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResetDeploymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentArn")
    public String deploymentArn;
    public ResetDeploymentsResponse withDeploymentArn(String deploymentArn) {
        this.deploymentArn = deploymentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public String deploymentId;
    public ResetDeploymentsResponse withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
}