package openapisdk.models.operations;



public class DeleteDeploymentGroupResponse {
    public Object applicationNameRequiredException;
    public DeleteDeploymentGroupResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public DeleteDeploymentGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDeploymentGroupOutput deleteDeploymentGroupOutput;
    public DeleteDeploymentGroupResponse withDeleteDeploymentGroupOutput(openapisdk.models.shared.DeleteDeploymentGroupOutput deleteDeploymentGroupOutput) {
        this.deleteDeploymentGroupOutput = deleteDeploymentGroupOutput;
        return this;
    }
    public Object deploymentGroupNameRequiredException;
    public DeleteDeploymentGroupResponse withDeploymentGroupNameRequiredException(Object deploymentGroupNameRequiredException) {
        this.deploymentGroupNameRequiredException = deploymentGroupNameRequiredException;
        return this;
    }
    public Object invalidApplicationNameException;
    public DeleteDeploymentGroupResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidDeploymentGroupNameException;
    public DeleteDeploymentGroupResponse withInvalidDeploymentGroupNameException(Object invalidDeploymentGroupNameException) {
        this.invalidDeploymentGroupNameException = invalidDeploymentGroupNameException;
        return this;
    }
    public Object invalidRoleException;
    public DeleteDeploymentGroupResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Long statusCode;
    public DeleteDeploymentGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}