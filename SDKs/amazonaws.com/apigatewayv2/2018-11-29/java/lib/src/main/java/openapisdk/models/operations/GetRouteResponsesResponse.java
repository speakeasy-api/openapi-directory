package openapisdk.models.operations;



public class GetRouteResponsesResponse {
    public Object badRequestException;
    public GetRouteResponsesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetRouteResponsesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRouteResponsesResponse getRouteResponsesResponse;
    public GetRouteResponsesResponse withGetRouteResponsesResponse(openapisdk.models.shared.GetRouteResponsesResponse getRouteResponsesResponse) {
        this.getRouteResponsesResponse = getRouteResponsesResponse;
        return this;
    }
    public Object notFoundException;
    public GetRouteResponsesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetRouteResponsesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetRouteResponsesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}