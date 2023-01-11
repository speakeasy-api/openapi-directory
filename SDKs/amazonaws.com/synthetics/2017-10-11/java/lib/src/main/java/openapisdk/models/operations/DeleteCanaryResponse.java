package openapisdk.models.operations;



public class DeleteCanaryResponse {
    public Object conflictException;
    public DeleteCanaryResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteCanaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCanaryResponse;
    public DeleteCanaryResponse withDeleteCanaryResponse(java.util.Map<String, Object> deleteCanaryResponse) {
        this.deleteCanaryResponse = deleteCanaryResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteCanaryResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteCanaryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteCanaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteCanaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}