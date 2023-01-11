package openapisdk.models.operations;



public class ListEventIntegrationsResponse {
    public Object accessDeniedException;
    public ListEventIntegrationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEventIntegrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListEventIntegrationsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public ListEventIntegrationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListEventIntegrationsResponse listEventIntegrationsResponse;
    public ListEventIntegrationsResponse withListEventIntegrationsResponse(openapisdk.models.shared.ListEventIntegrationsResponse listEventIntegrationsResponse) {
        this.listEventIntegrationsResponse = listEventIntegrationsResponse;
        return this;
    }
    public Long statusCode;
    public ListEventIntegrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEventIntegrationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}