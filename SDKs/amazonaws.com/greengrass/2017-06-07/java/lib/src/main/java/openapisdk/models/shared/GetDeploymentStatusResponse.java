package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDeploymentStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentStatus")
    public String deploymentStatus;
    public GetDeploymentStatusResponse withDeploymentStatus(String deploymentStatus) {
        this.deploymentStatus = deploymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentType")
    public DeploymentTypeEnum deploymentType;
    public GetDeploymentStatusResponse withDeploymentType(DeploymentTypeEnum deploymentType) {
        this.deploymentType = deploymentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDetails")
    public ErrorDetail[] errorDetails;
    public GetDeploymentStatusResponse withErrorDetails(ErrorDetail[] errorDetails) {
        this.errorDetails = errorDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public GetDeploymentStatusResponse withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedAt")
    public String updatedAt;
    public GetDeploymentStatusResponse withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}