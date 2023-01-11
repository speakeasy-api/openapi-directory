package openapisdk.models.operations;



public class CreateLfTagResponse {
    public Object accessDeniedException;
    public CreateLfTagResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateLfTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createLFTagResponse;
    public CreateLfTagResponse withCreateLfTagResponse(java.util.Map<String, Object> createLFTagResponse) {
        this.createLFTagResponse = createLFTagResponse;
        return this;
    }
    public Object entityNotFoundException;
    public CreateLfTagResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public CreateLfTagResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateLfTagResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateLfTagResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateLfTagResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateLfTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}