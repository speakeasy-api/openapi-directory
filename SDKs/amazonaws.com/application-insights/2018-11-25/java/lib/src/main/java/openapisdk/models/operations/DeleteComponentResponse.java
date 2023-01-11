package openapisdk.models.operations;



public class DeleteComponentResponse {
    public String contentType;
    public DeleteComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteComponentResponse;
    public DeleteComponentResponse withDeleteComponentResponse(java.util.Map<String, Object> deleteComponentResponse) {
        this.deleteComponentResponse = deleteComponentResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteComponentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}