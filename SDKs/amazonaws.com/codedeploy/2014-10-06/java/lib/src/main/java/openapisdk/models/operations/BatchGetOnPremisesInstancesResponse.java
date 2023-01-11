package openapisdk.models.operations;



public class BatchGetOnPremisesInstancesResponse {
    public openapisdk.models.shared.BatchGetOnPremisesInstancesOutput batchGetOnPremisesInstancesOutput;
    public BatchGetOnPremisesInstancesResponse withBatchGetOnPremisesInstancesOutput(openapisdk.models.shared.BatchGetOnPremisesInstancesOutput batchGetOnPremisesInstancesOutput) {
        this.batchGetOnPremisesInstancesOutput = batchGetOnPremisesInstancesOutput;
        return this;
    }
    public Object batchLimitExceededException;
    public BatchGetOnPremisesInstancesResponse withBatchLimitExceededException(Object batchLimitExceededException) {
        this.batchLimitExceededException = batchLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchGetOnPremisesInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object instanceNameRequiredException;
    public BatchGetOnPremisesInstancesResponse withInstanceNameRequiredException(Object instanceNameRequiredException) {
        this.instanceNameRequiredException = instanceNameRequiredException;
        return this;
    }
    public Object invalidInstanceNameException;
    public BatchGetOnPremisesInstancesResponse withInvalidInstanceNameException(Object invalidInstanceNameException) {
        this.invalidInstanceNameException = invalidInstanceNameException;
        return this;
    }
    public Long statusCode;
    public BatchGetOnPremisesInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}