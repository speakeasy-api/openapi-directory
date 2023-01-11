package openapisdk.models.operations;



public class GetRelationalDatabaseBundlesResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseBundlesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseBundlesResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseBundlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseBundlesResult getRelationalDatabaseBundlesResult;
    public GetRelationalDatabaseBundlesResponse withGetRelationalDatabaseBundlesResult(openapisdk.models.shared.GetRelationalDatabaseBundlesResult getRelationalDatabaseBundlesResult) {
        this.getRelationalDatabaseBundlesResult = getRelationalDatabaseBundlesResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseBundlesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseBundlesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseBundlesResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseBundlesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseBundlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseBundlesResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}