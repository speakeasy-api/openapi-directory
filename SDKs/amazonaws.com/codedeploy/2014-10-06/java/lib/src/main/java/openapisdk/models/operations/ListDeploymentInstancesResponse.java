package openapisdk.models.operations;



public class ListDeploymentInstancesResponse {
    public String contentType;
    public ListDeploymentInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public ListDeploymentInstancesResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public ListDeploymentInstancesResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object deploymentNotStartedException;
    public ListDeploymentInstancesResponse withDeploymentNotStartedException(Object deploymentNotStartedException) {
        this.deploymentNotStartedException = deploymentNotStartedException;
        return this;
    }
    public Object invalidComputePlatformException;
    public ListDeploymentInstancesResponse withInvalidComputePlatformException(Object invalidComputePlatformException) {
        this.invalidComputePlatformException = invalidComputePlatformException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public ListDeploymentInstancesResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Object invalidDeploymentInstanceTypeException;
    public ListDeploymentInstancesResponse withInvalidDeploymentInstanceTypeException(Object invalidDeploymentInstanceTypeException) {
        this.invalidDeploymentInstanceTypeException = invalidDeploymentInstanceTypeException;
        return this;
    }
    public Object invalidInstanceStatusException;
    public ListDeploymentInstancesResponse withInvalidInstanceStatusException(Object invalidInstanceStatusException) {
        this.invalidInstanceStatusException = invalidInstanceStatusException;
        return this;
    }
    public Object invalidInstanceTypeException;
    public ListDeploymentInstancesResponse withInvalidInstanceTypeException(Object invalidInstanceTypeException) {
        this.invalidInstanceTypeException = invalidInstanceTypeException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDeploymentInstancesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidTargetFilterNameException;
    public ListDeploymentInstancesResponse withInvalidTargetFilterNameException(Object invalidTargetFilterNameException) {
        this.invalidTargetFilterNameException = invalidTargetFilterNameException;
        return this;
    }
    public openapisdk.models.shared.ListDeploymentInstancesOutput listDeploymentInstancesOutput;
    public ListDeploymentInstancesResponse withListDeploymentInstancesOutput(openapisdk.models.shared.ListDeploymentInstancesOutput listDeploymentInstancesOutput) {
        this.listDeploymentInstancesOutput = listDeploymentInstancesOutput;
        return this;
    }
    public Long statusCode;
    public ListDeploymentInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}