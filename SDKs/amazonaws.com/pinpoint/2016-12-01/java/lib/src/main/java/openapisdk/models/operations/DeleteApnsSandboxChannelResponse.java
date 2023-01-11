package openapisdk.models.operations;



public class DeleteApnsSandboxChannelResponse {
    public Object badRequestException;
    public DeleteApnsSandboxChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteApnsSandboxChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApnsSandboxChannelResponse deleteApnsSandboxChannelResponse;
    public DeleteApnsSandboxChannelResponse withDeleteApnsSandboxChannelResponse(openapisdk.models.shared.DeleteApnsSandboxChannelResponse deleteApnsSandboxChannelResponse) {
        this.deleteApnsSandboxChannelResponse = deleteApnsSandboxChannelResponse;
        return this;
    }
    public Object forbiddenException;
    public DeleteApnsSandboxChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeleteApnsSandboxChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public DeleteApnsSandboxChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public DeleteApnsSandboxChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public DeleteApnsSandboxChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public DeleteApnsSandboxChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteApnsSandboxChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}