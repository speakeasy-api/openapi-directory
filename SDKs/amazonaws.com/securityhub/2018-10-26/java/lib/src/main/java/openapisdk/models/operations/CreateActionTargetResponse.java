package openapisdk.models.operations;



public class CreateActionTargetResponse {
    public String contentType;
    public CreateActionTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateActionTargetResponse createActionTargetResponse;
    public CreateActionTargetResponse withCreateActionTargetResponse(openapisdk.models.shared.CreateActionTargetResponse createActionTargetResponse) {
        this.createActionTargetResponse = createActionTargetResponse;
        return this;
    }
    public Object internalException;
    public CreateActionTargetResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public CreateActionTargetResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public CreateActionTargetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateActionTargetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceConflictException;
    public CreateActionTargetResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Long statusCode;
    public CreateActionTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}