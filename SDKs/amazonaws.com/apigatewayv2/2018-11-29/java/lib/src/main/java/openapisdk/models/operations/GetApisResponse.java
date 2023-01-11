package openapisdk.models.operations;



public class GetApisResponse {
    public Object badRequestException;
    public GetApisResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetApisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApisResponse getApisResponse;
    public GetApisResponse withGetApisResponse(openapisdk.models.shared.GetApisResponse getApisResponse) {
        this.getApisResponse = getApisResponse;
        return this;
    }
    public Object notFoundException;
    public GetApisResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetApisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetApisResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}