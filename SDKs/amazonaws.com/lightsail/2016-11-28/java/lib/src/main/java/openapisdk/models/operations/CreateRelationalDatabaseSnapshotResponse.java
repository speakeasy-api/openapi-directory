package openapisdk.models.operations;



public class CreateRelationalDatabaseSnapshotResponse {
    public Object accessDeniedException;
    public CreateRelationalDatabaseSnapshotResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public CreateRelationalDatabaseSnapshotResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public CreateRelationalDatabaseSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRelationalDatabaseSnapshotResult createRelationalDatabaseSnapshotResult;
    public CreateRelationalDatabaseSnapshotResponse withCreateRelationalDatabaseSnapshotResult(openapisdk.models.shared.CreateRelationalDatabaseSnapshotResult createRelationalDatabaseSnapshotResult) {
        this.createRelationalDatabaseSnapshotResult = createRelationalDatabaseSnapshotResult;
        return this;
    }
    public Object invalidInputException;
    public CreateRelationalDatabaseSnapshotResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateRelationalDatabaseSnapshotResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CreateRelationalDatabaseSnapshotResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CreateRelationalDatabaseSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateRelationalDatabaseSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateRelationalDatabaseSnapshotResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}