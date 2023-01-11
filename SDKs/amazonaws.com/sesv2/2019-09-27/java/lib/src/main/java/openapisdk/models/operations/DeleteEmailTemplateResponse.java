package openapisdk.models.operations;



public class DeleteEmailTemplateResponse {
    public Object badRequestException;
    public DeleteEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteEmailTemplateResponse;
    public DeleteEmailTemplateResponse withDeleteEmailTemplateResponse(java.util.Map<String, Object> deleteEmailTemplateResponse) {
        this.deleteEmailTemplateResponse = deleteEmailTemplateResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteEmailTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}