package openapisdk.models.operations;



public class DeleteEventIntegrationResponse {
    public Object accessDeniedException;
    public DeleteEventIntegrationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteEventIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteEventIntegrationResponse;
    public DeleteEventIntegrationResponse withDeleteEventIntegrationResponse(java.util.Map<String, Object> deleteEventIntegrationResponse) {
        this.deleteEventIntegrationResponse = deleteEventIntegrationResponse;
        return this;
    }
    public Object internalServiceError;
    public DeleteEventIntegrationResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DeleteEventIntegrationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEventIntegrationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEventIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteEventIntegrationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}