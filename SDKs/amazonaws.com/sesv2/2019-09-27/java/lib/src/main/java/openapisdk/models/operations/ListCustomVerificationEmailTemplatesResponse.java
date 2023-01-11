package openapisdk.models.operations;



public class ListCustomVerificationEmailTemplatesResponse {
    public Object badRequestException;
    public ListCustomVerificationEmailTemplatesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListCustomVerificationEmailTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCustomVerificationEmailTemplatesResponse listCustomVerificationEmailTemplatesResponse;
    public ListCustomVerificationEmailTemplatesResponse withListCustomVerificationEmailTemplatesResponse(openapisdk.models.shared.ListCustomVerificationEmailTemplatesResponse listCustomVerificationEmailTemplatesResponse) {
        this.listCustomVerificationEmailTemplatesResponse = listCustomVerificationEmailTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public ListCustomVerificationEmailTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListCustomVerificationEmailTemplatesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}