package openapisdk.models.operations;



public class StopRelationalDatabaseResponse {
    public Object accessDeniedException;
    public StopRelationalDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public StopRelationalDatabaseResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public StopRelationalDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public StopRelationalDatabaseResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public StopRelationalDatabaseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public StopRelationalDatabaseResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public StopRelationalDatabaseResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public StopRelationalDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopRelationalDatabaseResult stopRelationalDatabaseResult;
    public StopRelationalDatabaseResponse withStopRelationalDatabaseResult(openapisdk.models.shared.StopRelationalDatabaseResult stopRelationalDatabaseResult) {
        this.stopRelationalDatabaseResult = stopRelationalDatabaseResult;
        return this;
    }
    public Object unauthenticatedException;
    public StopRelationalDatabaseResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}