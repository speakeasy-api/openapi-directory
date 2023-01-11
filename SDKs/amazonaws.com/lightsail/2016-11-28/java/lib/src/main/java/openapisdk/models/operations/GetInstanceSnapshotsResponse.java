package openapisdk.models.operations;



public class GetInstanceSnapshotsResponse {
    public Object accessDeniedException;
    public GetInstanceSnapshotsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetInstanceSnapshotsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetInstanceSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInstanceSnapshotsResult getInstanceSnapshotsResult;
    public GetInstanceSnapshotsResponse withGetInstanceSnapshotsResult(openapisdk.models.shared.GetInstanceSnapshotsResult getInstanceSnapshotsResult) {
        this.getInstanceSnapshotsResult = getInstanceSnapshotsResult;
        return this;
    }
    public Object invalidInputException;
    public GetInstanceSnapshotsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetInstanceSnapshotsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetInstanceSnapshotsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetInstanceSnapshotsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetInstanceSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetInstanceSnapshotsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}