package openapisdk.models.operations;



public class ListLogPatternsResponse {
    public String contentType;
    public ListLogPatternsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListLogPatternsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListLogPatternsResponse listLogPatternsResponse;
    public ListLogPatternsResponse withListLogPatternsResponse(openapisdk.models.shared.ListLogPatternsResponse listLogPatternsResponse) {
        this.listLogPatternsResponse = listLogPatternsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListLogPatternsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListLogPatternsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListLogPatternsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}