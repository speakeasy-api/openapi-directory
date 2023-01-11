package openapisdk.models.operations;



public class GetCustomVerificationEmailTemplateResponse {
    public Object badRequestException;
    public GetCustomVerificationEmailTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetCustomVerificationEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCustomVerificationEmailTemplateResponse getCustomVerificationEmailTemplateResponse;
    public GetCustomVerificationEmailTemplateResponse withGetCustomVerificationEmailTemplateResponse(openapisdk.models.shared.GetCustomVerificationEmailTemplateResponse getCustomVerificationEmailTemplateResponse) {
        this.getCustomVerificationEmailTemplateResponse = getCustomVerificationEmailTemplateResponse;
        return this;
    }
    public Object notFoundException;
    public GetCustomVerificationEmailTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetCustomVerificationEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetCustomVerificationEmailTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}