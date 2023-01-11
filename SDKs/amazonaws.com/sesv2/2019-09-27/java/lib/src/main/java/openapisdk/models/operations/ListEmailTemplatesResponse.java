package openapisdk.models.operations;



public class ListEmailTemplatesResponse {
    public Object badRequestException;
    public ListEmailTemplatesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListEmailTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEmailTemplatesResponse listEmailTemplatesResponse;
    public ListEmailTemplatesResponse withListEmailTemplatesResponse(openapisdk.models.shared.ListEmailTemplatesResponse listEmailTemplatesResponse) {
        this.listEmailTemplatesResponse = listEmailTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public ListEmailTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEmailTemplatesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}