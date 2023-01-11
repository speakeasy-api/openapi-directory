package openapisdk.models.operations;



public class DeleteConnectionResponse {
    public Object concurrentModificationException;
    public DeleteConnectionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteConnectionResponse deleteConnectionResponse;
    public DeleteConnectionResponse withDeleteConnectionResponse(openapisdk.models.shared.DeleteConnectionResponse deleteConnectionResponse) {
        this.deleteConnectionResponse = deleteConnectionResponse;
        return this;
    }
    public Object internalException;
    public DeleteConnectionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}