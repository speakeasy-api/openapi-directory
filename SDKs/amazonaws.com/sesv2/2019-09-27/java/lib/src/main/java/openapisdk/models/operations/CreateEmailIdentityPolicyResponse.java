package openapisdk.models.operations;



public class CreateEmailIdentityPolicyResponse {
    public Object alreadyExistsException;
    public CreateEmailIdentityPolicyResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public CreateEmailIdentityPolicyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateEmailIdentityPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createEmailIdentityPolicyResponse;
    public CreateEmailIdentityPolicyResponse withCreateEmailIdentityPolicyResponse(java.util.Map<String, Object> createEmailIdentityPolicyResponse) {
        this.createEmailIdentityPolicyResponse = createEmailIdentityPolicyResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateEmailIdentityPolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateEmailIdentityPolicyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateEmailIdentityPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateEmailIdentityPolicyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}