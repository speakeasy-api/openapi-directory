package openapisdk.models.operations;



public class CreateRouteResponseResponse {
    public Object badRequestException;
    public CreateRouteResponseResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateRouteResponseResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateRouteResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRouteResponseResponse createRouteResponseResponse;
    public CreateRouteResponseResponse withCreateRouteResponseResponse(openapisdk.models.shared.CreateRouteResponseResponse createRouteResponseResponse) {
        this.createRouteResponseResponse = createRouteResponseResponse;
        return this;
    }
    public Object notFoundException;
    public CreateRouteResponseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateRouteResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateRouteResponseResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}