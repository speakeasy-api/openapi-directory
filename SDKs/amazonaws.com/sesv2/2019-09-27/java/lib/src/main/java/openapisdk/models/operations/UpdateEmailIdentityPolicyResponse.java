package openapisdk.models.operations;



public class UpdateEmailIdentityPolicyResponse {
    public Object badRequestException;
    public UpdateEmailIdentityPolicyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateEmailIdentityPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateEmailIdentityPolicyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEmailIdentityPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateEmailIdentityPolicyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> updateEmailIdentityPolicyResponse;
    public UpdateEmailIdentityPolicyResponse withUpdateEmailIdentityPolicyResponse(java.util.Map<String, Object> updateEmailIdentityPolicyResponse) {
        this.updateEmailIdentityPolicyResponse = updateEmailIdentityPolicyResponse;
        return this;
    }
}