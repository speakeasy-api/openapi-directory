package openapisdk.models.operations;



public class GetDirectoryLimitsResponse {
    public Object clientException;
    public GetDirectoryLimitsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetDirectoryLimitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public GetDirectoryLimitsResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public openapisdk.models.shared.GetDirectoryLimitsResult getDirectoryLimitsResult;
    public GetDirectoryLimitsResponse withGetDirectoryLimitsResult(openapisdk.models.shared.GetDirectoryLimitsResult getDirectoryLimitsResult) {
        this.getDirectoryLimitsResult = getDirectoryLimitsResult;
        return this;
    }
    public Object serviceException;
    public GetDirectoryLimitsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetDirectoryLimitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}