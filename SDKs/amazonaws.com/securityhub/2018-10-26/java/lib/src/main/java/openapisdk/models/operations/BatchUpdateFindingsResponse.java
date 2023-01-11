package openapisdk.models.operations;



public class BatchUpdateFindingsResponse {
    public openapisdk.models.shared.BatchUpdateFindingsResponse batchUpdateFindingsResponse;
    public BatchUpdateFindingsResponse withBatchUpdateFindingsResponse(openapisdk.models.shared.BatchUpdateFindingsResponse batchUpdateFindingsResponse) {
        this.batchUpdateFindingsResponse = batchUpdateFindingsResponse;
        return this;
    }
    public String contentType;
    public BatchUpdateFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public BatchUpdateFindingsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public BatchUpdateFindingsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public BatchUpdateFindingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public BatchUpdateFindingsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public BatchUpdateFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}