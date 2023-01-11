package openapisdk.models.operations;



public class ActivateEventSourceResponse {
    public Object concurrentModificationException;
    public ActivateEventSourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public ActivateEventSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ActivateEventSourceResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidStateException;
    public ActivateEventSourceResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object operationDisabledException;
    public ActivateEventSourceResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object resourceNotFoundException;
    public ActivateEventSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ActivateEventSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}