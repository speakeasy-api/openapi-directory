package openapisdk.models.operations;



public class CreateMlTransformResponse {
    public Object accessDeniedException;
    public CreateMlTransformResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object alreadyExistsException;
    public CreateMlTransformResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateMlTransformResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateMlTransformResponse createMLTransformResponse;
    public CreateMlTransformResponse withCreateMlTransformResponse(openapisdk.models.shared.CreateMlTransformResponse createMLTransformResponse) {
        this.createMLTransformResponse = createMLTransformResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateMlTransformResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServiceException;
    public CreateMlTransformResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateMlTransformResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateMlTransformResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateMlTransformResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateMlTransformResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}