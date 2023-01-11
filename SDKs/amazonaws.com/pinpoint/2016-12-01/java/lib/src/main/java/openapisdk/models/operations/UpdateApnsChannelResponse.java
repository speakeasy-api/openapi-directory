package openapisdk.models.operations;



public class UpdateApnsChannelResponse {
    public Object badRequestException;
    public UpdateApnsChannelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateApnsChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateApnsChannelResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateApnsChannelResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public UpdateApnsChannelResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public UpdateApnsChannelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public UpdateApnsChannelResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public UpdateApnsChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateApnsChannelResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateApnsChannelResponse updateApnsChannelResponse;
    public UpdateApnsChannelResponse withUpdateApnsChannelResponse(openapisdk.models.shared.UpdateApnsChannelResponse updateApnsChannelResponse) {
        this.updateApnsChannelResponse = updateApnsChannelResponse;
        return this;
    }
}