package openapisdk.models.operations;



public class UpdateCustomVerificationEmailTemplateResponse {
    public Object badRequestException;
    public UpdateCustomVerificationEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateCustomVerificationEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateCustomVerificationEmailTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateCustomVerificationEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateCustomVerificationEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> updateCustomVerificationEmailTemplateResponse;
    public UpdateCustomVerificationEmailTemplateResponse withUpdateCustomVerificationEmailTemplateResponse(java.util.Map<String, Object> updateCustomVerificationEmailTemplateResponse) {
        this.updateCustomVerificationEmailTemplateResponse = updateCustomVerificationEmailTemplateResponse;
        return this;
    }
}