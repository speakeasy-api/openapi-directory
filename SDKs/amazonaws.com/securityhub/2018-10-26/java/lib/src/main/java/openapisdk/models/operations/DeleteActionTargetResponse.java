package openapisdk.models.operations;



public class DeleteActionTargetResponse {
    public String contentType;
    public DeleteActionTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteActionTargetResponse deleteActionTargetResponse;
    public DeleteActionTargetResponse withDeleteActionTargetResponse(openapisdk.models.shared.DeleteActionTargetResponse deleteActionTargetResponse) {
        this.deleteActionTargetResponse = deleteActionTargetResponse;
        return this;
    }
    public Object internalException;
    public DeleteActionTargetResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DeleteActionTargetResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DeleteActionTargetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteActionTargetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteActionTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}