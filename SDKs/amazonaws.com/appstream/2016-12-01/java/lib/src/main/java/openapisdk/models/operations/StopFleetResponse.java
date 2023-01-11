package openapisdk.models.operations;



public class StopFleetResponse {
    public Object concurrentModificationException;
    public StopFleetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public StopFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public StopFleetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopFleetResult;
    public StopFleetResponse withStopFleetResult(java.util.Map<String, Object> stopFleetResult) {
        this.stopFleetResult = stopFleetResult;
        return this;
    }
}