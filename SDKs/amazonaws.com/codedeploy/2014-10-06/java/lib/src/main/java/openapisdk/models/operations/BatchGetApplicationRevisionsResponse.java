package openapisdk.models.operations;



public class BatchGetApplicationRevisionsResponse {
    public Object applicationDoesNotExistException;
    public BatchGetApplicationRevisionsResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public BatchGetApplicationRevisionsResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public openapisdk.models.shared.BatchGetApplicationRevisionsOutput batchGetApplicationRevisionsOutput;
    public BatchGetApplicationRevisionsResponse withBatchGetApplicationRevisionsOutput(openapisdk.models.shared.BatchGetApplicationRevisionsOutput batchGetApplicationRevisionsOutput) {
        this.batchGetApplicationRevisionsOutput = batchGetApplicationRevisionsOutput;
        return this;
    }
    public Object batchLimitExceededException;
    public BatchGetApplicationRevisionsResponse withBatchLimitExceededException(Object batchLimitExceededException) {
        this.batchLimitExceededException = batchLimitExceededException;
        return this;
    }
    public String contentType;
    public BatchGetApplicationRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApplicationNameException;
    public BatchGetApplicationRevisionsResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidRevisionException;
    public BatchGetApplicationRevisionsResponse withInvalidRevisionException(Object invalidRevisionException) {
        this.invalidRevisionException = invalidRevisionException;
        return this;
    }
    public Object revisionRequiredException;
    public BatchGetApplicationRevisionsResponse withRevisionRequiredException(Object revisionRequiredException) {
        this.revisionRequiredException = revisionRequiredException;
        return this;
    }
    public Long statusCode;
    public BatchGetApplicationRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}