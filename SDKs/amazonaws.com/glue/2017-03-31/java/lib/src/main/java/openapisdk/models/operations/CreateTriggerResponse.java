package openapisdk.models.operations;



public class CreateTriggerResponse {
    public Object alreadyExistsException;
    public CreateTriggerResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateTriggerResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTriggerResponse createTriggerResponse;
    public CreateTriggerResponse withCreateTriggerResponse(openapisdk.models.shared.CreateTriggerResponse createTriggerResponse) {
        this.createTriggerResponse = createTriggerResponse;
        return this;
    }
    public Object entityNotFoundException;
    public CreateTriggerResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateTriggerResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServiceException;
    public CreateTriggerResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateTriggerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateTriggerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateTriggerResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}