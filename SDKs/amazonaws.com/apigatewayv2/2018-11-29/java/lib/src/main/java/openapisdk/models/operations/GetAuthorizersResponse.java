package openapisdk.models.operations;



public class GetAuthorizersResponse {
    public Object badRequestException;
    public GetAuthorizersResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetAuthorizersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAuthorizersResponse getAuthorizersResponse;
    public GetAuthorizersResponse withGetAuthorizersResponse(openapisdk.models.shared.GetAuthorizersResponse getAuthorizersResponse) {
        this.getAuthorizersResponse = getAuthorizersResponse;
        return this;
    }
    public Object notFoundException;
    public GetAuthorizersResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetAuthorizersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetAuthorizersResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}