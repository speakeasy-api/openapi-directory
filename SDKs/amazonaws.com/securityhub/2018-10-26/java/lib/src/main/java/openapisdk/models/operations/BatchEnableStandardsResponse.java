package openapisdk.models.operations;



public class BatchEnableStandardsResponse {
    public openapisdk.models.shared.BatchEnableStandardsResponse batchEnableStandardsResponse;
    public BatchEnableStandardsResponse withBatchEnableStandardsResponse(openapisdk.models.shared.BatchEnableStandardsResponse batchEnableStandardsResponse) {
        this.batchEnableStandardsResponse = batchEnableStandardsResponse;
        return this;
    }
    public String contentType;
    public BatchEnableStandardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public BatchEnableStandardsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public BatchEnableStandardsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public BatchEnableStandardsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public BatchEnableStandardsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public BatchEnableStandardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}