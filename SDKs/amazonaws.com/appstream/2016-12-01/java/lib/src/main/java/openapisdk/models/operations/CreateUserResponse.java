package openapisdk.models.operations;



public class CreateUserResponse {
    public String contentType;
    public CreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createUserResult;
    public CreateUserResponse withCreateUserResult(java.util.Map<String, Object> createUserResult) {
        this.createUserResult = createUserResult;
        return this;
    }
    public Object invalidAccountStatusException;
    public CreateUserResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateUserResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object limitExceededException;
    public CreateUserResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateUserResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateUserResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}