package openapisdk.models.operations;



public class GetEmailIdentityPoliciesResponse {
    public Object badRequestException;
    public GetEmailIdentityPoliciesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetEmailIdentityPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEmailIdentityPoliciesResponse getEmailIdentityPoliciesResponse;
    public GetEmailIdentityPoliciesResponse withGetEmailIdentityPoliciesResponse(openapisdk.models.shared.GetEmailIdentityPoliciesResponse getEmailIdentityPoliciesResponse) {
        this.getEmailIdentityPoliciesResponse = getEmailIdentityPoliciesResponse;
        return this;
    }
    public Object notFoundException;
    public GetEmailIdentityPoliciesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetEmailIdentityPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetEmailIdentityPoliciesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}