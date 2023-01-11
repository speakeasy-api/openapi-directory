package openapisdk.models.operations;



public class RestoreFromSnapshotResponse {
    public Object clientException;
    public RestoreFromSnapshotResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RestoreFromSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public RestoreFromSnapshotResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public RestoreFromSnapshotResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public java.util.Map<String, Object> restoreFromSnapshotResult;
    public RestoreFromSnapshotResponse withRestoreFromSnapshotResult(java.util.Map<String, Object> restoreFromSnapshotResult) {
        this.restoreFromSnapshotResult = restoreFromSnapshotResult;
        return this;
    }
    public Object serviceException;
    public RestoreFromSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RestoreFromSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}