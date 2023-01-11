package openapisdk.models.operations;



public class CreateSchemaResponse {
    public Object accessDeniedException;
    public CreateSchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object alreadyExistsException;
    public CreateSchemaResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSchemaResponse createSchemaResponse;
    public CreateSchemaResponse withCreateSchemaResponse(openapisdk.models.shared.CreateSchemaResponse createSchemaResponse) {
        this.createSchemaResponse = createSchemaResponse;
        return this;
    }
    public Object entityNotFoundException;
    public CreateSchemaResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public CreateSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateSchemaResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateSchemaResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}