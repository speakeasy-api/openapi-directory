package openapisdk.models.operations;



public class GetApnsSandboxChannelResponse {
    public Object badRequestException;
    public GetApnsSandboxChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetApnsSandboxChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetApnsSandboxChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetApnsSandboxChannelResponse getApnsSandboxChannelResponse;
    public GetApnsSandboxChannelResponse withGetApnsSandboxChannelResponse(openapisdk.models.shared.GetApnsSandboxChannelResponse getApnsSandboxChannelResponse) {
        this.getApnsSandboxChannelResponse = getApnsSandboxChannelResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetApnsSandboxChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetApnsSandboxChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetApnsSandboxChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetApnsSandboxChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetApnsSandboxChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetApnsSandboxChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}