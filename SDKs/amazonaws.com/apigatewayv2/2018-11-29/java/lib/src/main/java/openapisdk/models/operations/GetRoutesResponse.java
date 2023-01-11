package openapisdk.models.operations;



public class GetRoutesResponse {
    public Object badRequestException;
    public GetRoutesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetRoutesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRoutesResponse getRoutesResponse;
    public GetRoutesResponse withGetRoutesResponse(openapisdk.models.shared.GetRoutesResponse getRoutesResponse) {
        this.getRoutesResponse = getRoutesResponse;
        return this;
    }
    public Object notFoundException;
    public GetRoutesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetRoutesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetRoutesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}