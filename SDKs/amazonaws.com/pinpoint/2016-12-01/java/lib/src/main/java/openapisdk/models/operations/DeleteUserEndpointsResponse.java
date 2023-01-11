package openapisdk.models.operations;



public class DeleteUserEndpointsResponse {
    public Object badRequestException;
    public DeleteUserEndpointsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteUserEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteUserEndpointsResponse deleteUserEndpointsResponse;
    public DeleteUserEndpointsResponse withDeleteUserEndpointsResponse(openapisdk.models.shared.DeleteUserEndpointsResponse deleteUserEndpointsResponse) {
        this.deleteUserEndpointsResponse = deleteUserEndpointsResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteUserEndpointsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteUserEndpointsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public DeleteUserEndpointsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public DeleteUserEndpointsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public DeleteUserEndpointsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public DeleteUserEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteUserEndpointsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}