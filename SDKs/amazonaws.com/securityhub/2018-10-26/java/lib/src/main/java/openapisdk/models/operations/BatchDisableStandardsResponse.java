package openapisdk.models.operations;



public class BatchDisableStandardsResponse {
    public openapisdk.models.shared.BatchDisableStandardsResponse batchDisableStandardsResponse;
    public BatchDisableStandardsResponse withBatchDisableStandardsResponse(openapisdk.models.shared.BatchDisableStandardsResponse batchDisableStandardsResponse) {
        this.batchDisableStandardsResponse = batchDisableStandardsResponse;
        return this;
    }
    public String contentType;
    public BatchDisableStandardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public BatchDisableStandardsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public BatchDisableStandardsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public BatchDisableStandardsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public BatchDisableStandardsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public BatchDisableStandardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}