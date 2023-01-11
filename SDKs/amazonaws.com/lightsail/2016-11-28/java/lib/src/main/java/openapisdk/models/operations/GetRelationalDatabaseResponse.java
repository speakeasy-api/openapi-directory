package openapisdk.models.operations;



public class GetRelationalDatabaseResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseResult getRelationalDatabaseResult;
    public GetRelationalDatabaseResponse withGetRelationalDatabaseResult(openapisdk.models.shared.GetRelationalDatabaseResult getRelationalDatabaseResult) {
        this.getRelationalDatabaseResult = getRelationalDatabaseResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}