package openapisdk.models.operations;



public class GetRelationalDatabaseParametersResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseParametersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseParametersResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseParametersResult getRelationalDatabaseParametersResult;
    public GetRelationalDatabaseParametersResponse withGetRelationalDatabaseParametersResult(openapisdk.models.shared.GetRelationalDatabaseParametersResult getRelationalDatabaseParametersResult) {
        this.getRelationalDatabaseParametersResult = getRelationalDatabaseParametersResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseParametersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseParametersResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseParametersResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseParametersResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseParametersResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}