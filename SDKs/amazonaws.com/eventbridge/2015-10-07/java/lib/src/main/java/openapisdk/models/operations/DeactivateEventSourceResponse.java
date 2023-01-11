package openapisdk.models.operations;



public class DeactivateEventSourceResponse {
    public Object concurrentModificationException;
    public DeactivateEventSourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeactivateEventSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public DeactivateEventSourceResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidStateException;
    public DeactivateEventSourceResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object operationDisabledException;
    public DeactivateEventSourceResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeactivateEventSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeactivateEventSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}