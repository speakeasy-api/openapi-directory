package openapisdk.models.operations;



public class CreateEmailTemplateResponse {
    public Object badRequestException;
    public CreateEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEmailTemplateResponse createEmailTemplateResponse;
    public CreateEmailTemplateResponse withCreateEmailTemplateResponse(openapisdk.models.shared.CreateEmailTemplateResponse createEmailTemplateResponse) {
        this.createEmailTemplateResponse = createEmailTemplateResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateEmailTemplateResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateEmailTemplateResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public CreateEmailTemplateResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Long statusCode;
    public CreateEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}