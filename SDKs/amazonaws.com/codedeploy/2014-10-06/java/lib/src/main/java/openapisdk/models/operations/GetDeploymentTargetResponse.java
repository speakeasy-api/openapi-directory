package openapisdk.models.operations;



public class GetDeploymentTargetResponse {
    public String contentType;
    public GetDeploymentTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public GetDeploymentTargetResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public GetDeploymentTargetResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object deploymentNotStartedException;
    public GetDeploymentTargetResponse withDeploymentNotStartedException(Object deploymentNotStartedException) {
        this.deploymentNotStartedException = deploymentNotStartedException;
        return this;
    }
    public Object deploymentTargetDoesNotExistException;
    public GetDeploymentTargetResponse withDeploymentTargetDoesNotExistException(Object deploymentTargetDoesNotExistException) {
        this.deploymentTargetDoesNotExistException = deploymentTargetDoesNotExistException;
        return this;
    }
    public Object deploymentTargetIdRequiredException;
    public GetDeploymentTargetResponse withDeploymentTargetIdRequiredException(Object deploymentTargetIdRequiredException) {
        this.deploymentTargetIdRequiredException = deploymentTargetIdRequiredException;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentTargetOutput getDeploymentTargetOutput;
    public GetDeploymentTargetResponse withGetDeploymentTargetOutput(openapisdk.models.shared.GetDeploymentTargetOutput getDeploymentTargetOutput) {
        this.getDeploymentTargetOutput = getDeploymentTargetOutput;
        return this;
    }
    public Object invalidDeploymentIdException;
    public GetDeploymentTargetResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Object invalidDeploymentTargetIdException;
    public GetDeploymentTargetResponse withInvalidDeploymentTargetIdException(Object invalidDeploymentTargetIdException) {
        this.invalidDeploymentTargetIdException = invalidDeploymentTargetIdException;
        return this;
    }
    public Object invalidInstanceNameException;
    public GetDeploymentTargetResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Long statusCode;
    public GetDeploymentTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}