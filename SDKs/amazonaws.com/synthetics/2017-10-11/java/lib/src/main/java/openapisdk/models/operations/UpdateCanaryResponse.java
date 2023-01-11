package openapisdk.models.operations;



public class UpdateCanaryResponse {
    public Object conflictException;
    public UpdateCanaryResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateCanaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateCanaryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateCanaryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateCanaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateCanaryResponse;
    public UpdateCanaryResponse withUpdateCanaryResponse(java.util.Map<String, Object> updateCanaryResponse) {
        this.updateCanaryResponse = updateCanaryResponse;
        return this;
    }
    public Object validationException;
    public UpdateCanaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}