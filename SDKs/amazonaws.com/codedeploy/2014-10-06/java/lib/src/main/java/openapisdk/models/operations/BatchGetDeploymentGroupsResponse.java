package openapisdk.models.operations;



public class BatchGetDeploymentGroupsResponse {
    public Object applicationDoesNotExistException;
    public BatchGetDeploymentGroupsResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public BatchGetDeploymentGroupsResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public openapisdk.models.shared.BatchGetDeploymentGroupsOutput batchGetDeploymentGroupsOutput;
    public BatchGetDeploymentGroupsResponse withBatchGetDeploymentGroupsOutput(openapisdk.models.shared.BatchGetDeploymentGroupsOutput batchGetDeploymentGroupsOutput) {
        this.batchGetDeploymentGroupsOutput = batchGetDeploymentGroupsOutput;
        return this;
    }
    public Object batchLimitExceededException;
    public BatchGetDeploymentGroupsResponse withBatchLimitExceededException(Object batchLimitExceededException) {
        this.batchLimitExceededException = batchLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchGetDeploymentGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentConfigDoesNotExistException;
    public BatchGetDeploymentGroupsResponse withDeploymentConfigDoesNotExistException(Object deploymentConfigDoesNotExistException) {
        this.deploymentConfigDoesNotExistException = deploymentConfigDoesNotExistException;
        return this;
    }
    public Object deploymentGroupNameRequiredException;
    public BatchGetDeploymentGroupsResponse withDeploymentGroupNameRequiredException(Object deploymentGroupNameRequiredException) {
        this.deploymentGroupNameRequiredException = deploymentGroupNameRequiredException;
        return this;
    }
    public Object invalidApplicationNameException;
    public BatchGetDeploymentGroupsResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidDeploymentGroupNameException;
    public BatchGetDeploymentGroupsResponse withInvalidDeploymentGroupNameException(Object invalidDeploymentGroupNameException) {
        this.invalidDeploymentGroupNameException = invalidDeploymentGroupNameException;
        return this;
    }
    public Long statusCode;
    public BatchGetDeploymentGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}