package openapisdk.models.operations;



public class DeleteEmailIdentityPolicyResponse {
    public Object badRequestException;
    public DeleteEmailIdentityPolicyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteEmailIdentityPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteEmailIdentityPolicyResponse;
    public DeleteEmailIdentityPolicyResponse withDeleteEmailIdentityPolicyResponse(java.util.Map<String, Object> deleteEmailIdentityPolicyResponse) {
        this.deleteEmailIdentityPolicyResponse = deleteEmailIdentityPolicyResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteEmailIdentityPolicyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEmailIdentityPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteEmailIdentityPolicyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}