package openapisdk.models.operations;



public class CreateRouteResponse {
    public Object badRequestException;
    public CreateRouteResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateRouteResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRouteResult createRouteResult;
    public CreateRouteResponse withCreateRouteResult(openapisdk.models.shared.CreateRouteResult createRouteResult) {
        this.createRouteResult = createRouteResult;
        return this;
    }
    public Object notFoundException;
    public CreateRouteResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateRouteResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}