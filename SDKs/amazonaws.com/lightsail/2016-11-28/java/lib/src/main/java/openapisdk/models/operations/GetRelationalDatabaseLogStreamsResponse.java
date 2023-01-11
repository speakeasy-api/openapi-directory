package openapisdk.models.operations;



public class GetRelationalDatabaseLogStreamsResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseLogStreamsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseLogStreamsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseLogStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseLogStreamsResult getRelationalDatabaseLogStreamsResult;
    public GetRelationalDatabaseLogStreamsResponse withGetRelationalDatabaseLogStreamsResult(openapisdk.models.shared.GetRelationalDatabaseLogStreamsResult getRelationalDatabaseLogStreamsResult) {
        this.getRelationalDatabaseLogStreamsResult = getRelationalDatabaseLogStreamsResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseLogStreamsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseLogStreamsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseLogStreamsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseLogStreamsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseLogStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseLogStreamsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}