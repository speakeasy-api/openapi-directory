package openapisdk.models.operations;



public class DeleteProgressUpdateStreamResponse {
    public Object accessDeniedException;
    public DeleteProgressUpdateStreamResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteProgressUpdateStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteProgressUpdateStreamResult;
    public DeleteProgressUpdateStreamResponse withDeleteProgressUpdateStreamResult(java.util.Map<String, Object> deleteProgressUpdateStreamResult) {
        this.deleteProgressUpdateStreamResult = deleteProgressUpdateStreamResult;
        return this;
    }
    public Object dryRunOperation;
    public DeleteProgressUpdateStreamResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public DeleteProgressUpdateStreamResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public DeleteProgressUpdateStreamResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public DeleteProgressUpdateStreamResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProgressUpdateStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteProgressUpdateStreamResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteProgressUpdateStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteProgressUpdateStreamResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public DeleteProgressUpdateStreamResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}