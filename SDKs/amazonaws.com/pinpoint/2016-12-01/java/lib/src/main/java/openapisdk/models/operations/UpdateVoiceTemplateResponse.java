package openapisdk.models.operations;



public class UpdateVoiceTemplateResponse {
    public Object badRequestException;
    public UpdateVoiceTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateVoiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateVoiceTemplateResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateVoiceTemplateResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public UpdateVoiceTemplateResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public UpdateVoiceTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public UpdateVoiceTemplateResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public UpdateVoiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateVoiceTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateVoiceTemplateResponse updateVoiceTemplateResponse;
    public UpdateVoiceTemplateResponse withUpdateVoiceTemplateResponse(openapisdk.models.shared.UpdateVoiceTemplateResponse updateVoiceTemplateResponse) {
        this.updateVoiceTemplateResponse = updateVoiceTemplateResponse;
        return this;
    }
}