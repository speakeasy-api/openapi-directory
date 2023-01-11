package openapisdk.models.operations;



public class GetEmailTemplateResponse {
    public Object badRequestException;
    public GetEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEmailTemplateResponse getEmailTemplateResponse;
    public GetEmailTemplateResponse withGetEmailTemplateResponse(openapisdk.models.shared.GetEmailTemplateResponse getEmailTemplateResponse) {
        this.getEmailTemplateResponse = getEmailTemplateResponse;
        return this;
    }
    public Object notFoundException;
    public GetEmailTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}