package openapisdk.models.operations;



public class PutConfigurationSetTrackingOptionsResponse {
    public Object badRequestException;
    public PutConfigurationSetTrackingOptionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutConfigurationSetTrackingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutConfigurationSetTrackingOptionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putConfigurationSetTrackingOptionsResponse;
    public PutConfigurationSetTrackingOptionsResponse withPutConfigurationSetTrackingOptionsResponse(java.util.Map<String, Object> putConfigurationSetTrackingOptionsResponse) {
        this.putConfigurationSetTrackingOptionsResponse = putConfigurationSetTrackingOptionsResponse;
        return this;
    }
    public Long statusCode;
    public PutConfigurationSetTrackingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutConfigurationSetTrackingOptionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}