package openapisdk.models.operations;



public class DeleteEmailIdentityResponse {
    public Object badRequestException;
    public DeleteEmailIdentityResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteEmailIdentityResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteEmailIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteEmailIdentityResponse;
    public DeleteEmailIdentityResponse withDeleteEmailIdentityResponse(java.util.Map<String, Object> deleteEmailIdentityResponse) {
        this.deleteEmailIdentityResponse = deleteEmailIdentityResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteEmailIdentityResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEmailIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteEmailIdentityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}