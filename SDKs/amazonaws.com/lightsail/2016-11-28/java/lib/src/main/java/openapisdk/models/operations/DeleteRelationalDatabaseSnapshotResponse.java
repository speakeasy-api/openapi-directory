package openapisdk.models.operations;



public class DeleteRelationalDatabaseSnapshotResponse {
    public Object accessDeniedException;
    public DeleteRelationalDatabaseSnapshotResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DeleteRelationalDatabaseSnapshotResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DeleteRelationalDatabaseSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRelationalDatabaseSnapshotResult deleteRelationalDatabaseSnapshotResult;
    public DeleteRelationalDatabaseSnapshotResponse withDeleteRelationalDatabaseSnapshotResult(openapisdk.models.shared.DeleteRelationalDatabaseSnapshotResult deleteRelationalDatabaseSnapshotResult) {
        this.deleteRelationalDatabaseSnapshotResult = deleteRelationalDatabaseSnapshotResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteRelationalDatabaseSnapshotResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteRelationalDatabaseSnapshotResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteRelationalDatabaseSnapshotResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteRelationalDatabaseSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteRelationalDatabaseSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteRelationalDatabaseSnapshotResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}