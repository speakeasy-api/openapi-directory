package openapisdk.models.operations;



public class PutEmailIdentityConfigurationSetAttributesResponse {
    public Object badRequestException;
    public PutEmailIdentityConfigurationSetAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutEmailIdentityConfigurationSetAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutEmailIdentityConfigurationSetAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putEmailIdentityConfigurationSetAttributesResponse;
    public PutEmailIdentityConfigurationSetAttributesResponse withPutEmailIdentityConfigurationSetAttributesResponse(java.util.Map<String, Object> putEmailIdentityConfigurationSetAttributesResponse) {
        this.putEmailIdentityConfigurationSetAttributesResponse = putEmailIdentityConfigurationSetAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutEmailIdentityConfigurationSetAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutEmailIdentityConfigurationSetAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}