package openapisdk.models.operations;



public class BatchImportFindingsResponse {
    public openapisdk.models.shared.BatchImportFindingsResponse batchImportFindingsResponse;
    public BatchImportFindingsResponse withBatchImportFindingsResponse(openapisdk.models.shared.BatchImportFindingsResponse batchImportFindingsResponse) {
        this.batchImportFindingsResponse = batchImportFindingsResponse;
        return this;
    }
    public String contentType;
    public BatchImportFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public BatchImportFindingsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public BatchImportFindingsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public BatchImportFindingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public BatchImportFindingsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public BatchImportFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}