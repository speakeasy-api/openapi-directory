package openapisdk.models.operations;



public class PutLoggingOptionsResponse {
    public Object conflictingOperationException;
    public PutLoggingOptionsResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public PutLoggingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public PutLoggingOptionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public PutLoggingOptionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public java.util.Map<String, Object> putLoggingOptionsResponse;
    public PutLoggingOptionsResponse withPutLoggingOptionsResponse(java.util.Map<String, Object> putLoggingOptionsResponse) {
        this.putLoggingOptionsResponse = putLoggingOptionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutLoggingOptionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutLoggingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutLoggingOptionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}