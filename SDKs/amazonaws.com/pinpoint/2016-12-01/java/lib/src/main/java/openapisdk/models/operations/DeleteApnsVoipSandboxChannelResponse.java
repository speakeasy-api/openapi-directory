package openapisdk.models.operations;



public class DeleteApnsVoipSandboxChannelResponse {
    public Object badRequestException;
    public DeleteApnsVoipSandboxChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteApnsVoipSandboxChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApnsVoipSandboxChannelResponse deleteApnsVoipSandboxChannelResponse;
    public DeleteApnsVoipSandboxChannelResponse withDeleteApnsVoipSandboxChannelResponse(openapisdk.models.shared.DeleteApnsVoipSandboxChannelResponse deleteApnsVoipSandboxChannelResponse) {
        this.deleteApnsVoipSandboxChannelResponse = deleteApnsVoipSandboxChannelResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteApnsVoipSandboxChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteApnsVoipSandboxChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public DeleteApnsVoipSandboxChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public DeleteApnsVoipSandboxChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public DeleteApnsVoipSandboxChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public DeleteApnsVoipSandboxChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteApnsVoipSandboxChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}