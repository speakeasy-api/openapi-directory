package openapisdk.models.operations;



public class StartCanaryResponse {
    public Object conflictException;
    public StartCanaryResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartCanaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartCanaryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartCanaryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> startCanaryResponse;
    public StartCanaryResponse withStartCanaryResponse(java.util.Map<String, Object> startCanaryResponse) {
        this.startCanaryResponse = startCanaryResponse;
        return this;
    }
    public Long statusCode;
    public StartCanaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StartCanaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}