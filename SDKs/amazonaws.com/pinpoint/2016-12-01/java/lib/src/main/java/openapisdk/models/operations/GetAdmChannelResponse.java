package openapisdk.models.operations;



public class GetAdmChannelResponse {
    public Object badRequestException;
    public GetAdmChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetAdmChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetAdmChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetAdmChannelResponse getAdmChannelResponse;
    public GetAdmChannelResponse withGetAdmChannelResponse(openapisdk.models.shared.GetAdmChannelResponse getAdmChannelResponse) {
        this.getAdmChannelResponse = getAdmChannelResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetAdmChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetAdmChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetAdmChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetAdmChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetAdmChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetAdmChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}