package openapisdk.models.operations;



public class GetRelationalDatabasesResponse {
    public Object accessDeniedException;
    public GetRelationalDatabasesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabasesResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabasesResult getRelationalDatabasesResult;
    public GetRelationalDatabasesResponse withGetRelationalDatabasesResult(openapisdk.models.shared.GetRelationalDatabasesResult getRelationalDatabasesResult) {
        this.getRelationalDatabasesResult = getRelationalDatabasesResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabasesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabasesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabasesResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabasesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabasesResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}