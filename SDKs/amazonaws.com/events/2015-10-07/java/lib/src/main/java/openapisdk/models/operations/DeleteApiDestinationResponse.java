package openapisdk.models.operations;



public class DeleteApiDestinationResponse {
    public Object concurrentModificationException;
    public DeleteApiDestinationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteApiDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteApiDestinationResponse;
    public DeleteApiDestinationResponse withDeleteApiDestinationResponse(java.util.Map<String, Object> deleteApiDestinationResponse) {
        this.deleteApiDestinationResponse = deleteApiDestinationResponse;
        return this;
    }
    public Object internalException;
    public DeleteApiDestinationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApiDestinationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApiDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}