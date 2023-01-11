package openapisdk.models.operations;



public class CreateEventIntegrationResponse {
    public Object accessDeniedException;
    public CreateEventIntegrationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateEventIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEventIntegrationResponse createEventIntegrationResponse;
    public CreateEventIntegrationResponse withCreateEventIntegrationResponse(openapisdk.models.shared.CreateEventIntegrationResponse createEventIntegrationResponse) {
        this.createEventIntegrationResponse = createEventIntegrationResponse;
        return this;
    }
    public Object duplicateResourceException;
    public CreateEventIntegrationResponse withDuplicateResourceException(Object duplicateResourceException) {
        this.duplicateResourceException = duplicateResourceException;
        return this;
    }
    public Object internalServiceError;
    public CreateEventIntegrationResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public CreateEventIntegrationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceQuotaExceededException;
    public CreateEventIntegrationResponse withResourceQuotaExceededException(Object resourceQuotaExceededException) {
        this.resourceQuotaExceededException = resourceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateEventIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateEventIntegrationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}