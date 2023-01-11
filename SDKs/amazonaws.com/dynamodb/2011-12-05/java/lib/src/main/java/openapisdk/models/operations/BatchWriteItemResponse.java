package openapisdk.models.operations;



public class BatchWriteItemResponse {
    public openapisdk.models.shared.BatchWriteItemOutput batchWriteItemOutput;
    public BatchWriteItemResponse withBatchWriteItemOutput(openapisdk.models.shared.BatchWriteItemOutput batchWriteItemOutput) {
        this.batchWriteItemOutput = batchWriteItemOutput;
        return this;
    }
    public String contentType;
    public BatchWriteItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public BatchWriteItemResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object limitExceededException;
    public BatchWriteItemResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public BatchWriteItemResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object requestLimitExceeded;
    public BatchWriteItemResponse withRequestLimitExceeded(Object requestLimitExceeded) {
        this.requestLimitExceeded = requestLimitExceeded;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchWriteItemResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchWriteItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}