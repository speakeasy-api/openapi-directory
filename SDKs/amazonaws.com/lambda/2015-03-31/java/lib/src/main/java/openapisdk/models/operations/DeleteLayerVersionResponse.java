package openapisdk.models.operations;



public class DeleteLayerVersionResponse {
    public String contentType;
    public DeleteLayerVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceException;
    public DeleteLayerVersionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteLayerVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteLayerVersionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}