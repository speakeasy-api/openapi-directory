package openapisdk.models.operations;



public class DeleteServerResponse {
    public String contentType;
    public DeleteServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteServerResponse;
    public DeleteServerResponse withDeleteServerResponse(java.util.Map<String, Object> deleteServerResponse) {
        this.deleteServerResponse = deleteServerResponse;
        return this;
    }
    public Object invalidStateException;
    public DeleteServerResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteServerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteServerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}