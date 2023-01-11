package openapisdk.models.operations;



public class CreateDiskFromSnapshotResponse {
    public Object accessDeniedException;
    public CreateDiskFromSnapshotResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public CreateDiskFromSnapshotResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public CreateDiskFromSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDiskFromSnapshotResult createDiskFromSnapshotResult;
    public CreateDiskFromSnapshotResponse withCreateDiskFromSnapshotResult(openapisdk.models.shared.CreateDiskFromSnapshotResult createDiskFromSnapshotResult) {
        this.createDiskFromSnapshotResult = createDiskFromSnapshotResult;
        return this;
    }
    public Object invalidInputException;
    public CreateDiskFromSnapshotResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateDiskFromSnapshotResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CreateDiskFromSnapshotResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CreateDiskFromSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateDiskFromSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateDiskFromSnapshotResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}