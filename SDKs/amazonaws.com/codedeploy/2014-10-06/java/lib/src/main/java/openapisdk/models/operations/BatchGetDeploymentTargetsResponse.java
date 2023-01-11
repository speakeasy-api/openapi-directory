package openapisdk.models.operations;



public class BatchGetDeploymentTargetsResponse {
    public openapisdk.models.shared.BatchGetDeploymentTargetsOutput batchGetDeploymentTargetsOutput;
    public BatchGetDeploymentTargetsResponse withBatchGetDeploymentTargetsOutput(openapisdk.models.shared.BatchGetDeploymentTargetsOutput batchGetDeploymentTargetsOutput) {
        this.batchGetDeploymentTargetsOutput = batchGetDeploymentTargetsOutput;
        return this;
    }
    public String contentType;
    public BatchGetDeploymentTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public BatchGetDeploymentTargetsResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public BatchGetDeploymentTargetsResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object deploymentNotStartedException;
    public BatchGetDeploymentTargetsResponse withDeploymentNotStartedException(Object deploymentNotStartedException) {
        this.deploymentNotStartedException = deploymentNotStartedException;
        return this;
    }
    public Object deploymentTargetDoesNotExistException;
    public BatchGetDeploymentTargetsResponse withDeploymentTargetDoesNotExistException(Object deploymentTargetDoesNotExistException) {
        this.deploymentTargetDoesNotExistException = deploymentTargetDoesNotExistException;
        return this;
    }
    public Object deploymentTargetIdRequiredException;
    public BatchGetDeploymentTargetsResponse withDeploymentTargetIdRequiredException(Object deploymentTargetIdRequiredException) {
        this.deploymentTargetIdRequiredException = deploymentTargetIdRequiredException;
        return this;
    }
    public Object deploymentTargetListSizeExceededException;
    public BatchGetDeploymentTargetsResponse withDeploymentTargetListSizeExceededException(Object deploymentTargetListSizeExceededException) {
        this.deploymentTargetListSizeExceededException = deploymentTargetListSizeExceededException;
        return this;
    }
    public Object instanceDoesNotExistException;
    public BatchGetDeploymentTargetsResponse withInstanceDoesNotExistException(Object instanceDoesNotExistException) {
        this.instanceDoesNotExistException = instanceDoesNotExistException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public BatchGetDeploymentTargetsResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Object invalidDeploymentTargetIdException;
    public BatchGetDeploymentTargetsResponse withInvalidDeploymentTargetIdException(Object invalidDeploymentTargetIdException) {
        this.invalidDeploymentTargetIdException = invalidDeploymentTargetIdException;
        return this;
    }
    public Long statusCode;
    public BatchGetDeploymentTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}