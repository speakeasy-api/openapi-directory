package openapisdk.models.operations;



public class CreateInAppTemplateResponse {
    public Object badRequestException;
    public CreateInAppTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateInAppTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateInAppTemplateResponse createInAppTemplateResponse;
    public CreateInAppTemplateResponse withCreateInAppTemplateResponse(openapisdk.models.shared.CreateInAppTemplateResponse createInAppTemplateResponse) {
        this.createInAppTemplateResponse = createInAppTemplateResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateInAppTemplateResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public CreateInAppTemplateResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public CreateInAppTemplateResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Long statusCode;
    public CreateInAppTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateInAppTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}