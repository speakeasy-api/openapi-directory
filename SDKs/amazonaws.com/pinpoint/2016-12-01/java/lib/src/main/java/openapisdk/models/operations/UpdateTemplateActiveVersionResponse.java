package openapisdk.models.operations;



public class UpdateTemplateActiveVersionResponse {
    public Object badRequestException;
    public UpdateTemplateActiveVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateTemplateActiveVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateTemplateActiveVersionResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateTemplateActiveVersionResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public UpdateTemplateActiveVersionResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public UpdateTemplateActiveVersionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public UpdateTemplateActiveVersionResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public UpdateTemplateActiveVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateTemplateActiveVersionResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateTemplateActiveVersionResponse updateTemplateActiveVersionResponse;
    public UpdateTemplateActiveVersionResponse withUpdateTemplateActiveVersionResponse(openapisdk.models.shared.UpdateTemplateActiveVersionResponse updateTemplateActiveVersionResponse) {
        this.updateTemplateActiveVersionResponse = updateTemplateActiveVersionResponse;
        return this;
    }
}