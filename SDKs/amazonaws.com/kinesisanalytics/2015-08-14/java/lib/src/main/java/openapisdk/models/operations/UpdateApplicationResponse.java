package openapisdk.models.operations;



public class UpdateApplicationResponse {
    public Object codeValidationException;
    public UpdateApplicationResponse withCodeValidationException(Object codeValidationException) {
        this.codeValidationException = codeValidationException;
        return this;
    }
    public Object concurrentModificationException;
    public UpdateApplicationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateApplicationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateApplicationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public UpdateApplicationResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
    public java.util.Map<String, Object> updateApplicationResponse;
    public UpdateApplicationResponse withUpdateApplicationResponse(java.util.Map<String, Object> updateApplicationResponse) {
        this.updateApplicationResponse = updateApplicationResponse;
        return this;
    }
}