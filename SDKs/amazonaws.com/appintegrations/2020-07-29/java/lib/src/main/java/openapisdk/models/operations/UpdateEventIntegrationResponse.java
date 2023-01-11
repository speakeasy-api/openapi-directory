package openapisdk.models.operations;



public class UpdateEventIntegrationResponse {
    public Object accessDeniedException;
    public UpdateEventIntegrationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateEventIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public UpdateEventIntegrationResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public UpdateEventIntegrationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateEventIntegrationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEventIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateEventIntegrationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateEventIntegrationResponse;
    public UpdateEventIntegrationResponse withUpdateEventIntegrationResponse(java.util.Map<String, Object> updateEventIntegrationResponse) {
        this.updateEventIntegrationResponse = updateEventIntegrationResponse;
        return this;
    }
}