package openapisdk.models.operations;



public class PutEmailIdentityMailFromAttributesResponse {
    public Object badRequestException;
    public PutEmailIdentityMailFromAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutEmailIdentityMailFromAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutEmailIdentityMailFromAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putEmailIdentityMailFromAttributesResponse;
    public PutEmailIdentityMailFromAttributesResponse withPutEmailIdentityMailFromAttributesResponse(java.util.Map<String, Object> putEmailIdentityMailFromAttributesResponse) {
        this.putEmailIdentityMailFromAttributesResponse = putEmailIdentityMailFromAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutEmailIdentityMailFromAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutEmailIdentityMailFromAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}