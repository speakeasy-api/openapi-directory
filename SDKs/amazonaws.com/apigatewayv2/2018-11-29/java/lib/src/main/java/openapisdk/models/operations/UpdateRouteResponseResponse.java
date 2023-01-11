package openapisdk.models.operations;



public class UpdateRouteResponseResponse {
    public Object badRequestException;
    public UpdateRouteResponseResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateRouteResponseResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateRouteResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateRouteResponseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRouteResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateRouteResponseResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateRouteResponseResponse updateRouteResponseResponse;
    public UpdateRouteResponseResponse withUpdateRouteResponseResponse(openapisdk.models.shared.UpdateRouteResponseResponse updateRouteResponseResponse) {
        this.updateRouteResponseResponse = updateRouteResponseResponse;
        return this;
    }
}