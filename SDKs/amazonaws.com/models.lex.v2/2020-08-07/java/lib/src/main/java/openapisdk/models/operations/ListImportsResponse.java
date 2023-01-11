package openapisdk.models.operations;



public class ListImportsResponse {
    public String contentType;
    public ListImportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListImportsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListImportsResponse listImportsResponse;
    public ListImportsResponse withListImportsResponse(openapisdk.models.shared.ListImportsResponse listImportsResponse) {
        this.listImportsResponse = listImportsResponse;
        return this;
    }
    public Long statusCode;
    public ListImportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListImportsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListImportsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}