package openapisdk.models.operations;



public class CreateUserDefinedFunctionResponse {
    public Object alreadyExistsException;
    public CreateUserDefinedFunctionResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateUserDefinedFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createUserDefinedFunctionResponse;
    public CreateUserDefinedFunctionResponse withCreateUserDefinedFunctionResponse(java.util.Map<String, Object> createUserDefinedFunctionResponse) {
        this.createUserDefinedFunctionResponse = createUserDefinedFunctionResponse;
        return this;
    }
    public Object entityNotFoundException;
    public CreateUserDefinedFunctionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public CreateUserDefinedFunctionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public CreateUserDefinedFunctionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateUserDefinedFunctionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateUserDefinedFunctionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateUserDefinedFunctionResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateUserDefinedFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}