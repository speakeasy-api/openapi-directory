package openapisdk.models.operations;



public class GetEventIntegrationResponse {
    public Object accessDeniedException;
    public GetEventIntegrationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEventIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEventIntegrationResponse getEventIntegrationResponse;
    public GetEventIntegrationResponse withGetEventIntegrationResponse(openapisdk.models.shared.GetEventIntegrationResponse getEventIntegrationResponse) {
        this.getEventIntegrationResponse = getEventIntegrationResponse;
        return this;
    }
    public Object internalServiceError;
    public GetEventIntegrationResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public GetEventIntegrationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEventIntegrationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEventIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEventIntegrationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}