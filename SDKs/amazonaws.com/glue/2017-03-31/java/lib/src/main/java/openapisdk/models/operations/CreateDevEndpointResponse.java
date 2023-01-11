package openapisdk.models.operations;



public class CreateDevEndpointResponse {
    public Object accessDeniedException;
    public CreateDevEndpointResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object alreadyExistsException;
    public CreateDevEndpointResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateDevEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDevEndpointResponse createDevEndpointResponse;
    public CreateDevEndpointResponse withCreateDevEndpointResponse(openapisdk.models.shared.CreateDevEndpointResponse createDevEndpointResponse) {
        this.createDevEndpointResponse = createDevEndpointResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateDevEndpointResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServiceException;
    public CreateDevEndpointResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateDevEndpointResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateDevEndpointResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateDevEndpointResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateDevEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateDevEndpointResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}