package openapisdk.models.operations;



public class GetApnsVoipChannelResponse {
    public Object badRequestException;
    public GetApnsVoipChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetApnsVoipChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetApnsVoipChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetApnsVoipChannelResponse getApnsVoipChannelResponse;
    public GetApnsVoipChannelResponse withGetApnsVoipChannelResponse(openapisdk.models.shared.GetApnsVoipChannelResponse getApnsVoipChannelResponse) {
        this.getApnsVoipChannelResponse = getApnsVoipChannelResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetApnsVoipChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetApnsVoipChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetApnsVoipChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetApnsVoipChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetApnsVoipChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetApnsVoipChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}