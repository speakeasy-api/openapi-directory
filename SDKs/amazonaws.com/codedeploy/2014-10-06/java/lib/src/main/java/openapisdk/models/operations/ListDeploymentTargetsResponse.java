package openapisdk.models.operations;



public class ListDeploymentTargetsResponse {
    public String contentType;
    public ListDeploymentTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public ListDeploymentTargetsResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public ListDeploymentTargetsResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object deploymentNotStartedException;
    public ListDeploymentTargetsResponse withDeploymentNotStartedException(Object deploymentNotStartedException) {
        this.deploymentNotStartedException = deploymentNotStartedException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public ListDeploymentTargetsResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Object invalidDeploymentInstanceTypeException;
    public ListDeploymentTargetsResponse withInvalidDeploymentInstanceTypeException(Object invalidDeploymentInstanceTypeException) {
        this.invalidDeploymentInstanceTypeException = invalidDeploymentInstanceTypeException;
        return this;
    }
    public Object invalidInstanceStatusException;
    public ListDeploymentTargetsResponse withInvalidInstanceStatusException(Object invalidInstanceStatusException) {
        this.invalidInstanceStatusException = invalidInstanceStatusException;
        return this;
    }
    public Object invalidInstanceTypeException;
    public ListDeploymentTargetsResponse withInvalidInstanceTypeException(Object invalidInstanceTypeException) {
        this.invalidInstanceTypeException = invalidInstanceTypeException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDeploymentTargetsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListDeploymentTargetsOutput listDeploymentTargetsOutput;
    public ListDeploymentTargetsResponse withListDeploymentTargetsOutput(openapisdk.models.shared.ListDeploymentTargetsOutput listDeploymentTargetsOutput) {
        this.listDeploymentTargetsOutput = listDeploymentTargetsOutput;
        return this;
    }
    public Long statusCode;
    public ListDeploymentTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}