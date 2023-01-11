package openapisdk.models.operations;



public class DisableRadiusResponse {
    public Object clientException;
    public DisableRadiusResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DisableRadiusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableRadiusResult;
    public DisableRadiusResponse withDisableRadiusResult(java.util.Map<String, Object> disableRadiusResult) {
        this.disableRadiusResult = disableRadiusResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DisableRadiusResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object serviceException;
    public DisableRadiusResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DisableRadiusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}