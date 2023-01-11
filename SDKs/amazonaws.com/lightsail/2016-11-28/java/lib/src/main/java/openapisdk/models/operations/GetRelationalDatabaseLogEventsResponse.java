package openapisdk.models.operations;



public class GetRelationalDatabaseLogEventsResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseLogEventsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseLogEventsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseLogEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseLogEventsResult getRelationalDatabaseLogEventsResult;
    public GetRelationalDatabaseLogEventsResponse withGetRelationalDatabaseLogEventsResult(openapisdk.models.shared.GetRelationalDatabaseLogEventsResult getRelationalDatabaseLogEventsResult) {
        this.getRelationalDatabaseLogEventsResult = getRelationalDatabaseLogEventsResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseLogEventsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseLogEventsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseLogEventsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseLogEventsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseLogEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseLogEventsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}