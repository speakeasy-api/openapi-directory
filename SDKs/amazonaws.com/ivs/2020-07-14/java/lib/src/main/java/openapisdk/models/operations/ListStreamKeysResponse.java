package openapisdk.models.operations;



public class ListStreamKeysResponse {
    public Object accessDeniedException;
    public ListStreamKeysResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListStreamKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStreamKeysResponse listStreamKeysResponse;
    public ListStreamKeysResponse withListStreamKeysResponse(openapisdk.models.shared.ListStreamKeysResponse listStreamKeysResponse) {
        this.listStreamKeysResponse = listStreamKeysResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListStreamKeysResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListStreamKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListStreamKeysResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}