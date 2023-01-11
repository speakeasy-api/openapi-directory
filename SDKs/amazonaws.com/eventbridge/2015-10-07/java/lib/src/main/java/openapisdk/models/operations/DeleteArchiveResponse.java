package openapisdk.models.operations;



public class DeleteArchiveResponse {
    public Object concurrentModificationException;
    public DeleteArchiveResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteArchiveResponse;
    public DeleteArchiveResponse withDeleteArchiveResponse(java.util.Map<String, Object> deleteArchiveResponse) {
        this.deleteArchiveResponse = deleteArchiveResponse;
        return this;
    }
    public Object internalException;
    public DeleteArchiveResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteArchiveResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}