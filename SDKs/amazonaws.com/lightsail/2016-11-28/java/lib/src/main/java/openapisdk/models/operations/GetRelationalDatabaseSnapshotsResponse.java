package openapisdk.models.operations;



public class GetRelationalDatabaseSnapshotsResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseSnapshotsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseSnapshotsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseSnapshotsResult getRelationalDatabaseSnapshotsResult;
    public GetRelationalDatabaseSnapshotsResponse withGetRelationalDatabaseSnapshotsResult(openapisdk.models.shared.GetRelationalDatabaseSnapshotsResult getRelationalDatabaseSnapshotsResult) {
        this.getRelationalDatabaseSnapshotsResult = getRelationalDatabaseSnapshotsResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseSnapshotsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseSnapshotsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseSnapshotsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseSnapshotsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseSnapshotsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}