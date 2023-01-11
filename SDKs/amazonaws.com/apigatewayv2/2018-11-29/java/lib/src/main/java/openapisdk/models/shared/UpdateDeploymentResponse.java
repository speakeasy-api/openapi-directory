package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeploymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoDeployed")
    public java.util.Map<String, Object> autoDeployed;
    public UpdateDeploymentResponse withAutoDeployed(java.util.Map<String, Object> autoDeployed) {
        this.autoDeployed = autoDeployed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public java.util.Map<String, Object> createdDate;
    public UpdateDeploymentResponse withCreatedDate(java.util.Map<String, Object> createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentId")
    public java.util.Map<String, Object> deploymentId;
    public UpdateDeploymentResponse withDeploymentId(java.util.Map<String, Object> deploymentId) {
        this.deploymentId = deploymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentStatus")
    public java.util.Map<String, Object> deploymentStatus;
    public UpdateDeploymentResponse withDeploymentStatus(java.util.Map<String, Object> deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentStatusMessage")
    public java.util.Map<String, Object> deploymentStatusMessage;
    public UpdateDeploymentResponse withDeploymentStatusMessage(java.util.Map<String, Object> deploymentStatusMessage) {
        this.deploymentStatusMessage = deploymentStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public UpdateDeploymentResponse withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
}