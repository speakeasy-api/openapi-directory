package openapisdk.models.operations;



public class UpdateRouteResponse {
    public Object badRequestException;
    public UpdateRouteResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateRouteResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateRouteResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateRouteResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public UpdateRouteResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateRouteResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateRouteResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateRouteResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateRouteOutput updateRouteOutput;
    public UpdateRouteResponse withUpdateRouteOutput(openapisdk.models.shared.UpdateRouteOutput updateRouteOutput) {
        this.updateRouteOutput = updateRouteOutput;
        return this;
    }
}