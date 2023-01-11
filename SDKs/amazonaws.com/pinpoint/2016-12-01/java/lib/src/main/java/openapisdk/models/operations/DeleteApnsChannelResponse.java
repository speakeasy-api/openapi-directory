package openapisdk.models.operations;



public class DeleteApnsChannelResponse {
    public Object badRequestException;
    public DeleteApnsChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteApnsChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApnsChannelResponse deleteApnsChannelResponse;
    public DeleteApnsChannelResponse withDeleteApnsChannelResponse(openapisdk.models.shared.DeleteApnsChannelResponse deleteApnsChannelResponse) {
        this.deleteApnsChannelResponse = deleteApnsChannelResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteApnsChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteApnsChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public DeleteApnsChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public DeleteApnsChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public DeleteApnsChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public DeleteApnsChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteApnsChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}