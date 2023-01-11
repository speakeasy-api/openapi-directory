package openapisdk.models.operations;



public class BatchGetDeploymentInstancesResponse {
    public openapisdk.models.shared.BatchGetDeploymentInstancesOutput batchGetDeploymentInstancesOutput;
    public BatchGetDeploymentInstancesResponse withBatchGetDeploymentInstancesOutput(openapisdk.models.shared.BatchGetDeploymentInstancesOutput batchGetDeploymentInstancesOutput) {
        this.batchGetDeploymentInstancesOutput = batchGetDeploymentInstancesOutput;
        return this;
    }
    public Object batchLimitExceededException;
    public BatchGetDeploymentInstancesResponse withBatchLimitExceededException(Object batchLimitExceededException) {
        this.batchLimitExceededException = batchLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchGetDeploymentInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentDoesNotExistException;
    public BatchGetDeploymentInstancesResponse withDeploymentDoesNotExistException(Object deploymentDoesNotExistException) {
        this.deploymentDoesNotExistException = deploymentDoesNotExistException;
        return this;
    }
    public Object deploymentIdRequiredException;
    public BatchGetDeploymentInstancesResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object instanceIdRequiredException;
    public BatchGetDeploymentInstancesResponse withInstanceIdRequiredException(Object instanceIdRequiredException) {
        this.instanceIdRequiredException = instanceIdRequiredException;
        return this;
    }
    public Object invalidComputePlatformException;
    public BatchGetDeploymentInstancesResponse withInvalidComputePlatformException(Object invalidComputePlatformException) {
        this.invalidComputePlatformException = invalidComputePlatformException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public BatchGetDeploymentInstancesResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Object invalidInstanceNameException;
    public BatchGetDeploymentInstancesResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Long statusCode;
    public BatchGetDeploymentInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}