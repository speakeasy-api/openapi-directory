package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeploymentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public String deploymentId;
    public CreateDeploymentRequestBody withDeploymentId(String deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonProperty("DeploymentType")
    public CreateDeploymentRequestBodyDeploymentTypeEnum deploymentType;
    public CreateDeploymentRequestBody withDeploymentType(CreateDeploymentRequestBodyDeploymentTypeEnum deploymentType) {
        this.deploymentType = deploymentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupVersionId")
    public String groupVersionId;
    public CreateDeploymentRequestBody withGroupVersionId(String groupVersionId) {
        this.groupVersionId = groupVersionId;
        return this;
    }
}