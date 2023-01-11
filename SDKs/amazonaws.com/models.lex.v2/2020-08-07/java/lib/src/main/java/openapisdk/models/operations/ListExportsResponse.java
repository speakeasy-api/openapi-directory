package openapisdk.models.operations;



public class ListExportsResponse {
    public String contentType;
    public ListExportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListExportsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListExportsResponse listExportsResponse;
    public ListExportsResponse withListExportsResponse(openapisdk.models.shared.ListExportsResponse listExportsResponse) {
        this.listExportsResponse = listExportsResponse;
        return this;
    }
    public Long statusCode;
    public ListExportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListExportsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListExportsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}