package openapisdk.models.operations;



public class GetDiskSnapshotResponse {
    public Object accessDeniedException;
    public GetDiskSnapshotResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetDiskSnapshotResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetDiskSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDiskSnapshotResult getDiskSnapshotResult;
    public GetDiskSnapshotResponse withGetDiskSnapshotResult(openapisdk.models.shared.GetDiskSnapshotResult getDiskSnapshotResult) {
        this.getDiskSnapshotResult = getDiskSnapshotResult;
        return this;
    }
    public Object invalidInputException;
    public GetDiskSnapshotResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetDiskSnapshotResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetDiskSnapshotResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetDiskSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetDiskSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetDiskSnapshotResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}