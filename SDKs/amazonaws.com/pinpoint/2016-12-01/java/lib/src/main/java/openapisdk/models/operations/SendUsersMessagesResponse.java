package openapisdk.models.operations;



public class SendUsersMessagesResponse {
    public Object badRequestException;
    public SendUsersMessagesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public SendUsersMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public SendUsersMessagesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public SendUsersMessagesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public SendUsersMessagesResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public SendUsersMessagesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public SendUsersMessagesResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public openapisdk.models.shared.SendUsersMessagesResponse sendUsersMessagesResponse;
    public SendUsersMessagesResponse withSendUsersMessagesResponse(openapisdk.models.shared.SendUsersMessagesResponse sendUsersMessagesResponse) {
        this.sendUsersMessagesResponse = sendUsersMessagesResponse;
        return this;
    }
    public Long statusCode;
    public SendUsersMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SendUsersMessagesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}