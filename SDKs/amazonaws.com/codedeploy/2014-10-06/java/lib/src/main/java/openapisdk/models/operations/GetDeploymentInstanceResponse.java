package openapisdk.models.operations;



public class GetDeploymentInstanceResponse {
    public String contentType;
    public GetDeploymentInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public GetDeploymentInstanceResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public GetDeploymentInstanceResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentInstanceOutput getDeploymentInstanceOutput;
    public GetDeploymentInstanceResponse withGetDeploymentInstanceOutput(openapisdk.models.shared.GetDeploymentInstanceOutput getDeploymentInstanceOutput) {
        this.getDeploymentInstanceOutput = getDeploymentInstanceOutput;
        return this;
    }
    public Object instanceDoesNotExistException;
    public GetDeploymentInstanceResponse withInstanceDoesNotExistException(Object instanceDoesNotExistException) {
        this.instanceDoesNotExistException = instanceDoesNotExistException;
        return this;
    }
    public Object instanceIdRequiredException;
    public GetDeploymentInstanceResponse withInstanceIdRequiredException(Object instanceIdRequiredException) {
        this.instanceIdRequiredException = instanceIdRequiredException;
        return this;
    }
    public Object invalidComputePlatformException;
    public GetDeploymentInstanceResponse withInvalidComputePlatformException(Object invalidComputePlatformException) {
        this.invalidComputePlatformException = invalidComputePlatformException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public GetDeploymentInstanceResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Object invalidInstanceNameException;
    public GetDeploymentInstanceResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Long statusCode;
    public GetDeploymentInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}