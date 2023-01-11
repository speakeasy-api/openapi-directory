package openapisdk.models.operations;



public class DeleteFleetResponse {
    public Object concurrentModificationException;
    public DeleteFleetResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFleetResult;
    public DeleteFleetResponse withDeleteFleetResult(java.util.Map<String, Object> deleteFleetResult) {
        this.deleteFleetResult = deleteFleetResult;
        return this;
    }
    public Object resourceInUseException;
    public DeleteFleetResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFleetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}