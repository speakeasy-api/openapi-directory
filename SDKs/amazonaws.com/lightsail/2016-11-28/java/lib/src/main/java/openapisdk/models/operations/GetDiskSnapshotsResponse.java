package openapisdk.models.operations;



public class GetDiskSnapshotsResponse {
    public Object accessDeniedException;
    public GetDiskSnapshotsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetDiskSnapshotsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetDiskSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDiskSnapshotsResult getDiskSnapshotsResult;
    public GetDiskSnapshotsResponse withGetDiskSnapshotsResult(openapisdk.models.shared.GetDiskSnapshotsResult getDiskSnapshotsResult) {
        this.getDiskSnapshotsResult = getDiskSnapshotsResult;
        return this;
    }
    public Object invalidInputException;
    public GetDiskSnapshotsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetDiskSnapshotsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetDiskSnapshotsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetDiskSnapshotsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetDiskSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetDiskSnapshotsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}