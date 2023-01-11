package openapisdk.models.operations;



public class DeleteStackResponse {
    public Object concurrentModificationException;
    public DeleteStackResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteStackResult;
    public DeleteStackResponse withDeleteStackResult(java.util.Map<String, Object> deleteStackResult) {
        this.deleteStackResult = deleteStackResult;
        return this;
    }
    public Object resourceInUseException;
    public DeleteStackResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}