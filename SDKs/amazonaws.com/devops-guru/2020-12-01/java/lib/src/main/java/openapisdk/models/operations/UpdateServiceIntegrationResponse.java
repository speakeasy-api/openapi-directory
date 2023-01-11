package openapisdk.models.operations;



public class UpdateServiceIntegrationResponse {
    public Object accessDeniedException;
    public UpdateServiceIntegrationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateServiceIntegrationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateServiceIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateServiceIntegrationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public UpdateServiceIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateServiceIntegrationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateServiceIntegrationResponse;
    public UpdateServiceIntegrationResponse withUpdateServiceIntegrationResponse(java.util.Map<String, Object> updateServiceIntegrationResponse) {
        this.updateServiceIntegrationResponse = updateServiceIntegrationResponse;
        return this;
    }
    public Object validationException;
    public UpdateServiceIntegrationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}