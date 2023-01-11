package openapisdk.models.operations;



public class GetSnapshotLimitsResponse {
    public Object clientException;
    public GetSnapshotLimitsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetSnapshotLimitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public GetSnapshotLimitsResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public openapisdk.models.shared.GetSnapshotLimitsResult getSnapshotLimitsResult;
    public GetSnapshotLimitsResponse withGetSnapshotLimitsResult(openapisdk.models.shared.GetSnapshotLimitsResult getSnapshotLimitsResult) {
        this.getSnapshotLimitsResult = getSnapshotLimitsResult;
        return this;
    }
    public Object serviceException;
    public GetSnapshotLimitsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetSnapshotLimitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}