package openapisdk.models.operations;



public class ImportMigrationTaskResponse {
    public Object accessDeniedException;
    public ImportMigrationTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ImportMigrationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dryRunOperation;
    public ImportMigrationTaskResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public ImportMigrationTaskResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public java.util.Map<String, Object> importMigrationTaskResult;
    public ImportMigrationTaskResponse withImportMigrationTaskResult(java.util.Map<String, Object> importMigrationTaskResult) {
        this.importMigrationTaskResult = importMigrationTaskResult;
        return this;
    }
    public Object internalServerError;
    public ImportMigrationTaskResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public ImportMigrationTaskResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public ImportMigrationTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ImportMigrationTaskResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ImportMigrationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ImportMigrationTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public ImportMigrationTaskResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}