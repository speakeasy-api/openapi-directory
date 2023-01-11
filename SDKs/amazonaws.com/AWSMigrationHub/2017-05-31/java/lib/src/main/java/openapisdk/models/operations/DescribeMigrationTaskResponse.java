package openapisdk.models.operations;



public class DescribeMigrationTaskResponse {
    public Object accessDeniedException;
    public DescribeMigrationTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeMigrationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMigrationTaskResult describeMigrationTaskResult;
    public DescribeMigrationTaskResponse withDescribeMigrationTaskResult(openapisdk.models.shared.DescribeMigrationTaskResult describeMigrationTaskResult) {
        this.describeMigrationTaskResult = describeMigrationTaskResult;
        return this;
    }
    public Object homeRegionNotSetException;
    public DescribeMigrationTaskResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public DescribeMigrationTaskResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public DescribeMigrationTaskResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeMigrationTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeMigrationTaskResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeMigrationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeMigrationTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}