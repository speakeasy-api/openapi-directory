package openapisdk.models.operations;



public class CreateRelationalDatabaseFromSnapshotResponse {
    public Object accessDeniedException;
    public CreateRelationalDatabaseFromSnapshotResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public CreateRelationalDatabaseFromSnapshotResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public CreateRelationalDatabaseFromSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRelationalDatabaseFromSnapshotResult createRelationalDatabaseFromSnapshotResult;
    public CreateRelationalDatabaseFromSnapshotResponse withCreateRelationalDatabaseFromSnapshotResult(openapisdk.models.shared.CreateRelationalDatabaseFromSnapshotResult createRelationalDatabaseFromSnapshotResult) {
        this.createRelationalDatabaseFromSnapshotResult = createRelationalDatabaseFromSnapshotResult;
        return this;
    }
    public Object invalidInputException;
    public CreateRelationalDatabaseFromSnapshotResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateRelationalDatabaseFromSnapshotResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CreateRelationalDatabaseFromSnapshotResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CreateRelationalDatabaseFromSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateRelationalDatabaseFromSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateRelationalDatabaseFromSnapshotResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}