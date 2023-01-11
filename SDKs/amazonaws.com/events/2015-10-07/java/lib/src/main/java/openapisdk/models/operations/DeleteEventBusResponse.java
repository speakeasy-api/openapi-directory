package openapisdk.models.operations;



public class DeleteEventBusResponse {
    public Object concurrentModificationException;
    public DeleteEventBusResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteEventBusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public DeleteEventBusResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Long statusCode;
    public DeleteEventBusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}