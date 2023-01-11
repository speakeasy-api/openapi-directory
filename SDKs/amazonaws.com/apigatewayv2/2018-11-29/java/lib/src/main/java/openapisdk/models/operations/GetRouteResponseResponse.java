package openapisdk.models.operations;



public class GetRouteResponseResponse {
    public String contentType;
    public GetRouteResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRouteResponseResponse getRouteResponseResponse;
    public GetRouteResponseResponse withGetRouteResponseResponse(openapisdk.models.shared.GetRouteResponseResponse getRouteResponseResponse) {
        this.getRouteResponseResponse = getRouteResponseResponse;
        return this;
    }
    public Object notFoundException;
    public GetRouteResponseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetRouteResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetRouteResponseResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}