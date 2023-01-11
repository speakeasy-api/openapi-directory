package openapisdk.models.operations;



public class BatchGetDeploymentsResponse {
    public openapisdk.models.shared.BatchGetDeploymentsOutput batchGetDeploymentsOutput;
    public BatchGetDeploymentsResponse withBatchGetDeploymentsOutput(openapisdk.models.shared.BatchGetDeploymentsOutput batchGetDeploymentsOutput) {
        this.batchGetDeploymentsOutput = batchGetDeploymentsOutput;
        return this;
    }
    public Object batchLimitExceededException;
    public BatchGetDeploymentsResponse withBatchLimitExceededException(Object batchLimitExceededException) {
        this.batchLimitExceededException = batchLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchGetDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentIdRequiredException;
    public BatchGetDeploymentsResponse withDeploymentIdRequiredException(Object deploymentIdRequiredException) {
        this.deploymentIdRequiredException = deploymentIdRequiredException;
        return this;
    }
    public Object invalidDeploymentIdException;
    public BatchGetDeploymentsResponse withInvalidDeploymentIdException(Object invalidDeploymentIdException) {
        this.invalidDeploymentIdException = invalidDeploymentIdException;
        return this;
    }
    public Long statusCode;
    public BatchGetDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}