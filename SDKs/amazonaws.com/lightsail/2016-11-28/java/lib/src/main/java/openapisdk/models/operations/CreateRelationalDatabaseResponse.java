package openapisdk.models.operations;



public class CreateRelationalDatabaseResponse {
    public Object accessDeniedException;
    public CreateRelationalDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public CreateRelationalDatabaseResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public CreateRelationalDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRelationalDatabaseResult createRelationalDatabaseResult;
    public CreateRelationalDatabaseResponse withCreateRelationalDatabaseResult(openapisdk.models.shared.CreateRelationalDatabaseResult createRelationalDatabaseResult) {
        this.createRelationalDatabaseResult = createRelationalDatabaseResult;
        return this;
    }
    public Object invalidInputException;
    public CreateRelationalDatabaseResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateRelationalDatabaseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CreateRelationalDatabaseResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CreateRelationalDatabaseResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateRelationalDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateRelationalDatabaseResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}