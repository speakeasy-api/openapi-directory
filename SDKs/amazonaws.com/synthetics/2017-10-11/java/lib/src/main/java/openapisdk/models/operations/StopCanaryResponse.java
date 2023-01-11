package openapisdk.models.operations;



public class StopCanaryResponse {
    public Object conflictException;
    public StopCanaryResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StopCanaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopCanaryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopCanaryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopCanaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopCanaryResponse;
    public StopCanaryResponse withStopCanaryResponse(java.util.Map<String, Object> stopCanaryResponse) {
        this.stopCanaryResponse = stopCanaryResponse;
        return this;
    }
    public Object validationException;
    public StopCanaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}