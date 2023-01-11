package openapisdk.models.operations;



public class GetRelationalDatabaseBlueprintsResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseBlueprintsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseBlueprintsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseBlueprintsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseBlueprintsResult getRelationalDatabaseBlueprintsResult;
    public GetRelationalDatabaseBlueprintsResponse withGetRelationalDatabaseBlueprintsResult(openapisdk.models.shared.GetRelationalDatabaseBlueprintsResult getRelationalDatabaseBlueprintsResult) {
        this.getRelationalDatabaseBlueprintsResult = getRelationalDatabaseBlueprintsResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseBlueprintsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseBlueprintsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseBlueprintsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseBlueprintsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseBlueprintsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseBlueprintsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}