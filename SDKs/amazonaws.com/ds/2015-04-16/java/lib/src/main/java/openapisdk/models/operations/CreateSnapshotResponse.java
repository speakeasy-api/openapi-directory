package openapisdk.models.operations;



public class CreateSnapshotResponse {
    public Object clientException;
    public CreateSnapshotResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSnapshotResult createSnapshotResult;
    public CreateSnapshotResponse withCreateSnapshotResult(openapisdk.models.shared.CreateSnapshotResult createSnapshotResult) {
        this.createSnapshotResult = createSnapshotResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public CreateSnapshotResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public CreateSnapshotResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public CreateSnapshotResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object snapshotLimitExceededException;
    public CreateSnapshotResponse withSnapshotLimitExceededException(Object snapshotLimitExceededException) {
        this.snapshotLimitExceededException = snapshotLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}