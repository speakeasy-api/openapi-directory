package openapisdk.models.operations;



public class DeletePushTemplateResponse {
    public Object badRequestException;
    public DeletePushTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeletePushTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletePushTemplateResponse deletePushTemplateResponse;
    public DeletePushTemplateResponse withDeletePushTemplateResponse(openapisdk.models.shared.DeletePushTemplateResponse deletePushTemplateResponse) {
        this.deletePushTemplateResponse = deletePushTemplateResponse;
        return this;
    }
    public Object forbiddenException;
    public DeletePushTemplateResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DeletePushTemplateResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public DeletePushTemplateResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public DeletePushTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public DeletePushTemplateResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public DeletePushTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeletePushTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}