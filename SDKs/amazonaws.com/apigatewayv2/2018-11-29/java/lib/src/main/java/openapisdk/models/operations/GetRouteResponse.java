package openapisdk.models.operations;



public class GetRouteResponse {
    public String contentType;
    public GetRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRouteResult getRouteResult;
    public GetRouteResponse withGetRouteResult(openapisdk.models.shared.GetRouteResult getRouteResult) {
        this.getRouteResult = getRouteResult;
        return this;
    }
    public Object notFoundException;
    public GetRouteResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetRouteResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}