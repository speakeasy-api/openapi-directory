package openapisdk.models.operations;



public class DeleteApplicationSnapshotResponse {
    public String contentType;
    public DeleteApplicationSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteApplicationSnapshotResponse;
    public DeleteApplicationSnapshotResponse withDeleteApplicationSnapshotResponse(java.util.Map<String, Object> deleteApplicationSnapshotResponse) {
        this.deleteApplicationSnapshotResponse = deleteApplicationSnapshotResponse;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteApplicationSnapshotResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteApplicationSnapshotResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteApplicationSnapshotResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApplicationSnapshotResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApplicationSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteApplicationSnapshotResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}