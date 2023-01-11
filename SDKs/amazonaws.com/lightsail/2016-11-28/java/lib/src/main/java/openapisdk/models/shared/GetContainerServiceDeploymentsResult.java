package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContainerServiceDeploymentsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public ContainerServiceDeployment[] deployments;
    public GetContainerServiceDeploymentsResult withDeployments(ContainerServiceDeployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
}