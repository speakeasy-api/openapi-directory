package openapisdk.models.operations;



public class GetEmailIdentityResponse {
    public Object badRequestException;
    public GetEmailIdentityResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetEmailIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEmailIdentityResponse getEmailIdentityResponse;
    public GetEmailIdentityResponse withGetEmailIdentityResponse(openapisdk.models.shared.GetEmailIdentityResponse getEmailIdentityResponse) {
        this.getEmailIdentityResponse = getEmailIdentityResponse;
        return this;
    }
    public Object notFoundException;
    public GetEmailIdentityResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetEmailIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetEmailIdentityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}