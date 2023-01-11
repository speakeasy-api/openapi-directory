package openapisdk.models.operations;



public class UpdateActionTargetResponse {
    public String contentType;
    public UpdateActionTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateActionTargetResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public UpdateActionTargetResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public UpdateActionTargetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateActionTargetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateActionTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateActionTargetResponse;
    public UpdateActionTargetResponse withUpdateActionTargetResponse(java.util.Map<String, Object> updateActionTargetResponse) {
        this.updateActionTargetResponse = updateActionTargetResponse;
        return this;
    }
}