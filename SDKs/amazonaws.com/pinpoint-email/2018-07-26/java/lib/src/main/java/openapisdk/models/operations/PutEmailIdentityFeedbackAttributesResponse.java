package openapisdk.models.operations;



public class PutEmailIdentityFeedbackAttributesResponse {
    public Object badRequestException;
    public PutEmailIdentityFeedbackAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutEmailIdentityFeedbackAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutEmailIdentityFeedbackAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putEmailIdentityFeedbackAttributesResponse;
    public PutEmailIdentityFeedbackAttributesResponse withPutEmailIdentityFeedbackAttributesResponse(java.util.Map<String, Object> putEmailIdentityFeedbackAttributesResponse) {
        this.putEmailIdentityFeedbackAttributesResponse = putEmailIdentityFeedbackAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutEmailIdentityFeedbackAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutEmailIdentityFeedbackAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}