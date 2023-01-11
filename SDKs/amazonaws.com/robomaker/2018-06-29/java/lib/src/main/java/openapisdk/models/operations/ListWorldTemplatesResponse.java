package openapisdk.models.operations;



public class ListWorldTemplatesResponse {
    public String contentType;
    public ListWorldTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListWorldTemplatesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListWorldTemplatesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListWorldTemplatesResponse listWorldTemplatesResponse;
    public ListWorldTemplatesResponse withListWorldTemplatesResponse(openapisdk.models.shared.ListWorldTemplatesResponse listWorldTemplatesResponse) {
        this.listWorldTemplatesResponse = listWorldTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public ListWorldTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListWorldTemplatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}