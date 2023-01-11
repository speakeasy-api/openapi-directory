package openapisdk.models.operations;



public class DeleteRouteRequestParameterResponse {
    public String contentType;
    public DeleteRouteRequestParameterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public DeleteRouteRequestParameterResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteRouteRequestParameterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteRouteRequestParameterResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}