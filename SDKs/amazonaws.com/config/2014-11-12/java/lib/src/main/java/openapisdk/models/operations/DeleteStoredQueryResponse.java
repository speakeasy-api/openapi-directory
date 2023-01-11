package openapisdk.models.operations;



public class DeleteStoredQueryResponse {
    public String contentType;
    public DeleteStoredQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteStoredQueryResponse;
    public DeleteStoredQueryResponse withDeleteStoredQueryResponse(java.util.Map<String, Object> deleteStoredQueryResponse) {
        this.deleteStoredQueryResponse = deleteStoredQueryResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStoredQueryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteStoredQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteStoredQueryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}