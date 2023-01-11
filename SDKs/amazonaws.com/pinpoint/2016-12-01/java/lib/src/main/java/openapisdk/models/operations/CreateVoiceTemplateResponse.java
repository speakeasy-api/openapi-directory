package openapisdk.models.operations;



public class CreateVoiceTemplateResponse {
    public Object badRequestException;
    public CreateVoiceTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateVoiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateVoiceTemplateResponse createVoiceTemplateResponse;
    public CreateVoiceTemplateResponse withCreateVoiceTemplateResponse(openapisdk.models.shared.CreateVoiceTemplateResponse createVoiceTemplateResponse) {
        this.createVoiceTemplateResponse = createVoiceTemplateResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateVoiceTemplateResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateVoiceTemplateResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public CreateVoiceTemplateResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Long statusCode;
    public CreateVoiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateVoiceTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}