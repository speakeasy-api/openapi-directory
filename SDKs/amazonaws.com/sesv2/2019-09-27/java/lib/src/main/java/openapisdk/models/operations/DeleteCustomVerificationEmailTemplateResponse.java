package openapisdk.models.operations;



public class DeleteCustomVerificationEmailTemplateResponse {
    public Object badRequestException;
    public DeleteCustomVerificationEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteCustomVerificationEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCustomVerificationEmailTemplateResponse;
    public DeleteCustomVerificationEmailTemplateResponse withDeleteCustomVerificationEmailTemplateResponse(java.util.Map<String, Object> deleteCustomVerificationEmailTemplateResponse) {
        this.deleteCustomVerificationEmailTemplateResponse = deleteCustomVerificationEmailTemplateResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteCustomVerificationEmailTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteCustomVerificationEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteCustomVerificationEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}