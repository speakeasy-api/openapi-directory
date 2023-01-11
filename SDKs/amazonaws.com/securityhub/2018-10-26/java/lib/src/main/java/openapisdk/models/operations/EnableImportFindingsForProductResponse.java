package openapisdk.models.operations;



public class EnableImportFindingsForProductResponse {
    public String contentType;
    public EnableImportFindingsForProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnableImportFindingsForProductResponse enableImportFindingsForProductResponse;
    public EnableImportFindingsForProductResponse withEnableImportFindingsForProductResponse(openapisdk.models.shared.EnableImportFindingsForProductResponse enableImportFindingsForProductResponse) {
        this.enableImportFindingsForProductResponse = enableImportFindingsForProductResponse;
        return this;
    }
    public Object internalException;
    public EnableImportFindingsForProductResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public EnableImportFindingsForProductResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public EnableImportFindingsForProductResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public EnableImportFindingsForProductResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceConflictException;
    public EnableImportFindingsForProductResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Long statusCode;
    public EnableImportFindingsForProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}