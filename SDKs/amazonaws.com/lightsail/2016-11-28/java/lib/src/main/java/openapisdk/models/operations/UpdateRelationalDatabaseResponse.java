package openapisdk.models.operations;



public class UpdateRelationalDatabaseResponse {
    public Object accessDeniedException;
    public UpdateRelationalDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public UpdateRelationalDatabaseResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public UpdateRelationalDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateRelationalDatabaseResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public UpdateRelationalDatabaseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public UpdateRelationalDatabaseResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public UpdateRelationalDatabaseResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateRelationalDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public UpdateRelationalDatabaseResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    public openapisdk.models.shared.UpdateRelationalDatabaseResult updateRelationalDatabaseResult;
    public UpdateRelationalDatabaseResponse withUpdateRelationalDatabaseResult(openapisdk.models.shared.UpdateRelationalDatabaseResult updateRelationalDatabaseResult) {
        this.updateRelationalDatabaseResult = updateRelationalDatabaseResult;
        return this;
    }
}