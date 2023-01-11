package openapisdk.models.operations;



public class NotifyMigrationTaskStateResponse {
    public Object accessDeniedException;
    public NotifyMigrationTaskStateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public NotifyMigrationTaskStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dryRunOperation;
    public NotifyMigrationTaskStateResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public NotifyMigrationTaskStateResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public NotifyMigrationTaskStateResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public NotifyMigrationTaskStateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public java.util.Map<String, Object> notifyMigrationTaskStateResult;
    public NotifyMigrationTaskStateResponse withNotifyMigrationTaskStateResult(java.util.Map<String, Object> notifyMigrationTaskStateResult) {
        this.notifyMigrationTaskStateResult = notifyMigrationTaskStateResult;
        return this;
    }
    public Object resourceNotFoundException;
    public NotifyMigrationTaskStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public NotifyMigrationTaskStateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public NotifyMigrationTaskStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public NotifyMigrationTaskStateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public NotifyMigrationTaskStateResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}