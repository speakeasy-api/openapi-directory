package openapisdk.models.operations;



public class UpdateDestinationResponse {
    public Object concurrentModificationException;
    public UpdateDestinationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateDestinationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateDestinationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDestinationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateDestinationOutput;
    public UpdateDestinationResponse withUpdateDestinationOutput(java.util.Map<String, Object> updateDestinationOutput) {
        this.updateDestinationOutput = updateDestinationOutput;
        return this;
    }
}