package openapisdk.models.operations;



public class DeleteSnapshotResponse {
    public Object clientException;
    public DeleteSnapshotResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSnapshotResult deleteSnapshotResult;
    public DeleteSnapshotResponse withDeleteSnapshotResult(openapisdk.models.shared.DeleteSnapshotResult deleteSnapshotResult) {
        this.deleteSnapshotResult = deleteSnapshotResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DeleteSnapshotResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteSnapshotResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DeleteSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}