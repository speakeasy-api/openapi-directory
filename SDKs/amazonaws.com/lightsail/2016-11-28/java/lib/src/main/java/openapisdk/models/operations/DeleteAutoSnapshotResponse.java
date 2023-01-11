package openapisdk.models.operations;



public class DeleteAutoSnapshotResponse {
    public Object accessDeniedException;
    public DeleteAutoSnapshotResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteAutoSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAutoSnapshotResult deleteAutoSnapshotResult;
    public DeleteAutoSnapshotResponse withDeleteAutoSnapshotResult(openapisdk.models.shared.DeleteAutoSnapshotResult deleteAutoSnapshotResult) {
        this.deleteAutoSnapshotResult = deleteAutoSnapshotResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteAutoSnapshotResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteAutoSnapshotResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteAutoSnapshotResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteAutoSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteAutoSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteAutoSnapshotResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}