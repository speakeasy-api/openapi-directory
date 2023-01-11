package openapisdk.models.operations;



public class CreateSmsTemplateResponse {
    public Object badRequestException;
    public CreateSmsTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateSmsTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSmsTemplateResponse createSmsTemplateResponse;
    public CreateSmsTemplateResponse withCreateSmsTemplateResponse(openapisdk.models.shared.CreateSmsTemplateResponse createSmsTemplateResponse) {
        this.createSmsTemplateResponse = createSmsTemplateResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateSmsTemplateResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateSmsTemplateResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public CreateSmsTemplateResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Long statusCode;
    public CreateSmsTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateSmsTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}