package openapisdk.models.operations;



public class RegisterSchemaVersionResponse {
    public Object accessDeniedException;
    public RegisterSchemaVersionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object concurrentModificationException;
    public RegisterSchemaVersionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public RegisterSchemaVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public RegisterSchemaVersionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public RegisterSchemaVersionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public RegisterSchemaVersionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.RegisterSchemaVersionResponse registerSchemaVersionResponse;
    public RegisterSchemaVersionResponse withRegisterSchemaVersionResponse(openapisdk.models.shared.RegisterSchemaVersionResponse registerSchemaVersionResponse) {
        this.registerSchemaVersionResponse = registerSchemaVersionResponse;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public RegisterSchemaVersionResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public RegisterSchemaVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}