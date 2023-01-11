package openapisdk.models.operations;



public class ListMigrationTasksResponse {
    public Object accessDeniedException;
    public ListMigrationTasksResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListMigrationTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public ListMigrationTasksResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public ListMigrationTasksResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public ListMigrationTasksResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListMigrationTasksResult listMigrationTasksResult;
    public ListMigrationTasksResponse withListMigrationTasksResult(openapisdk.models.shared.ListMigrationTasksResult listMigrationTasksResult) {
        this.listMigrationTasksResult = listMigrationTasksResult;
        return this;
    }
    public Object policyErrorException;
    public ListMigrationTasksResponse withPolicyErrorException(Object policyErrorException) {
        this.policyErrorException = policyErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListMigrationTasksResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListMigrationTasksResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListMigrationTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListMigrationTasksResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}