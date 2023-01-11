package openapisdk.models.operations;



public class BatchGetApplicationsResponse {
    public Object applicationDoesNotExistException;
    public BatchGetApplicationsResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public BatchGetApplicationsResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public openapisdk.models.shared.BatchGetApplicationsOutput batchGetApplicationsOutput;
    public BatchGetApplicationsResponse withBatchGetApplicationsOutput(openapisdk.models.shared.BatchGetApplicationsOutput batchGetApplicationsOutput) {
        this.batchGetApplicationsOutput = batchGetApplicationsOutput;
        return this;
    }
    public Object batchLimitExceededException;
    public BatchGetApplicationsResponse withBatchLimitExceededException(Object batchLimitExceededException) {
        this.batchLimitExceededException = batchLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchGetApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApplicationNameException;
    public BatchGetApplicationsResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Long statusCode;
    public BatchGetApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}