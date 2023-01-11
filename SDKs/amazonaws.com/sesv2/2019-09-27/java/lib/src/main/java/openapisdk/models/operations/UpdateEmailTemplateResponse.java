package openapisdk.models.operations;



public class UpdateEmailTemplateResponse {
    public Object badRequestException;
    public UpdateEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateEmailTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> updateEmailTemplateResponse;
    public UpdateEmailTemplateResponse withUpdateEmailTemplateResponse(java.util.Map<String, Object> updateEmailTemplateResponse) {
        this.updateEmailTemplateResponse = updateEmailTemplateResponse;
        return this;
    }
}