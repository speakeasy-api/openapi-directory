package openapisdk.models.operations;



public class GetApnsVoipSandboxChannelResponse {
    public Object badRequestException;
    public GetApnsVoipSandboxChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetApnsVoipSandboxChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetApnsVoipSandboxChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetApnsVoipSandboxChannelResponse getApnsVoipSandboxChannelResponse;
    public GetApnsVoipSandboxChannelResponse withGetApnsVoipSandboxChannelResponse(openapisdk.models.shared.GetApnsVoipSandboxChannelResponse getApnsVoipSandboxChannelResponse) {
        this.getApnsVoipSandboxChannelResponse = getApnsVoipSandboxChannelResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetApnsVoipSandboxChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetApnsVoipSandboxChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetApnsVoipSandboxChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetApnsVoipSandboxChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetApnsVoipSandboxChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetApnsVoipSandboxChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}