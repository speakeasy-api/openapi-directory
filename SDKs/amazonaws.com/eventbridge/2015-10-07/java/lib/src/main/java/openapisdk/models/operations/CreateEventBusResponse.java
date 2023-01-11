package openapisdk.models.operations;



public class CreateEventBusResponse {
    public Object concurrentModificationException;
    public CreateEventBusResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateEventBusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEventBusResponse createEventBusResponse;
    public CreateEventBusResponse withCreateEventBusResponse(openapisdk.models.shared.CreateEventBusResponse createEventBusResponse) {
        this.createEventBusResponse = createEventBusResponse;
        return this;
    }
    public Object internalException;
    public CreateEventBusResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidStateException;
    public CreateEventBusResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object limitExceededException;
    public CreateEventBusResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationDisabledException;
    public CreateEventBusResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateEventBusResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateEventBusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateEventBusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}