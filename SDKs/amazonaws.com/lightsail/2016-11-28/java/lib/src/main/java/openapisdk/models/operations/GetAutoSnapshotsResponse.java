package openapisdk.models.operations;



public class GetAutoSnapshotsResponse {
    public Object accessDeniedException;
    public GetAutoSnapshotsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAutoSnapshotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAutoSnapshotsResult getAutoSnapshotsResult;
    public GetAutoSnapshotsResponse withGetAutoSnapshotsResult(openapisdk.models.shared.GetAutoSnapshotsResult getAutoSnapshotsResult) {
        this.getAutoSnapshotsResult = getAutoSnapshotsResult;
        return this;
    }
    public Object invalidInputException;
    public GetAutoSnapshotsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetAutoSnapshotsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetAutoSnapshotsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetAutoSnapshotsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetAutoSnapshotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetAutoSnapshotsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}