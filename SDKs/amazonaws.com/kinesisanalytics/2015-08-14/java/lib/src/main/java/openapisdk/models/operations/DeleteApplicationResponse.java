package openapisdk.models.operations;



public class DeleteApplicationResponse {
    public Object concurrentModificationException;
    public DeleteApplicationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteApplicationResponse;
    public DeleteApplicationResponse withDeleteApplicationResponse(java.util.Map<String, Object> deleteApplicationResponse) {
        this.deleteApplicationResponse = deleteApplicationResponse;
        return this;
    }
    public Object resourceInUseException;
    public DeleteApplicationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteApplicationResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}