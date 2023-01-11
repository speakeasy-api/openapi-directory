package openapisdk.models.operations;



public class DeleteApnsVoipChannelResponse {
    public Object badRequestException;
    public DeleteApnsVoipChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteApnsVoipChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApnsVoipChannelResponse deleteApnsVoipChannelResponse;
    public DeleteApnsVoipChannelResponse withDeleteApnsVoipChannelResponse(openapisdk.models.shared.DeleteApnsVoipChannelResponse deleteApnsVoipChannelResponse) {
        this.deleteApnsVoipChannelResponse = deleteApnsVoipChannelResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteApnsVoipChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteApnsVoipChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public DeleteApnsVoipChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public DeleteApnsVoipChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public DeleteApnsVoipChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public DeleteApnsVoipChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteApnsVoipChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}