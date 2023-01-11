package openapisdk.models.operations;



public class DisableImportFindingsForProductResponse {
    public String contentType;
    public DisableImportFindingsForProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableImportFindingsForProductResponse;
    public DisableImportFindingsForProductResponse withDisableImportFindingsForProductResponse(java.util.Map<String, Object> disableImportFindingsForProductResponse) {
        this.disableImportFindingsForProductResponse = disableImportFindingsForProductResponse;
        return this;
    }
    public Object internalException;
    public DisableImportFindingsForProductResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DisableImportFindingsForProductResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DisableImportFindingsForProductResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DisableImportFindingsForProductResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisableImportFindingsForProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisableImportFindingsForProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}