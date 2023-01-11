package openapisdk.models.operations;



public class CreateProgressUpdateStreamResponse {
    public Object accessDeniedException;
    public CreateProgressUpdateStreamResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateProgressUpdateStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createProgressUpdateStreamResult;
    public CreateProgressUpdateStreamResponse withCreateProgressUpdateStreamResult(java.util.Map<String, Object> createProgressUpdateStreamResult) {
        this.createProgressUpdateStreamResult = createProgressUpdateStreamResult;
        return this;
    }
    public Object dryRunOperation;
    public CreateProgressUpdateStreamResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public CreateProgressUpdateStreamResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public CreateProgressUpdateStreamResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public CreateProgressUpdateStreamResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateProgressUpdateStreamResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateProgressUpdateStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateProgressUpdateStreamResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public CreateProgressUpdateStreamResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}