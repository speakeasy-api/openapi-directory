package openapisdk.models.operations;



public class DeleteStreamResponse {
    public String contentType;
    public DeleteStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deleteConflictException;
    public DeleteStreamResponse withDeleteConflictException(Object deleteConflictException) {
        this.deleteConflictException = deleteConflictException;
        return this;
    }
    public java.util.Map<String, Object> deleteStreamResponse;
    public DeleteStreamResponse withDeleteStreamResponse(java.util.Map<String, Object> deleteStreamResponse) {
        this.deleteStreamResponse = deleteStreamResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteStreamResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteStreamResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteStreamResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteStreamResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteStreamResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}