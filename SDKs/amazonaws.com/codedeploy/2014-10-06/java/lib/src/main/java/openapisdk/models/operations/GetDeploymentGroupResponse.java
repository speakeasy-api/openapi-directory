package openapisdk.models.operations;



public class GetDeploymentGroupResponse {
    public Object applicationDoesNotExistException;
    public GetDeploymentGroupResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public GetDeploymentGroupResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public GetDeploymentGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentConfigDoesNotExistException;
    public GetDeploymentGroupResponse withDeploymentConfigDoesNotExistException(Object deploymentConfigDoesNotExistException) {
        this.deploymentConfigDoesNotExistException = deploymentConfigDoesNotExistException;
        return this;
    }
    public Object deploymentGroupDoesNotExistException;
    public GetDeploymentGroupResponse withDeploymentGroupDoesNotExistException(Object deploymentGroupDoesNotExistException) {
        this.deploymentGroupDoesNotExistException = deploymentGroupDoesNotExistException;
        return this;
    }
    public Object deploymentGroupNameRequiredException;
    public GetDeploymentGroupResponse withDeploymentGroupNameRequiredException(Object deploymentGroupNameRequiredException) {
        this.deploymentGroupNameRequiredException = deploymentGroupNameRequiredException;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentGroupOutput getDeploymentGroupOutput;
    public GetDeploymentGroupResponse withGetDeploymentGroupOutput(openapisdk.models.shared.GetDeploymentGroupOutput getDeploymentGroupOutput) {
        this.getDeploymentGroupOutput = getDeploymentGroupOutput;
        return this;
    }
    public Object invalidApplicationNameException;
    public GetDeploymentGroupResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidDeploymentGroupNameException;
    public GetDeploymentGroupResponse withInvalidDeploymentGroupNameException(Object invalidDeploymentGroupNameException) {
        this.invalidDeploymentGroupNameException = invalidDeploymentGroupNameException;
        return this;
    }
    public Long statusCode;
    public GetDeploymentGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}