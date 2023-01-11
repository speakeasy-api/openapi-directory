package openapisdk.models.operations;



public class ListEventIntegrationAssociationsResponse {
    public Object accessDeniedException;
    public ListEventIntegrationAssociationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEventIntegrationAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListEventIntegrationAssociationsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public ListEventIntegrationAssociationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListEventIntegrationAssociationsResponse listEventIntegrationAssociationsResponse;
    public ListEventIntegrationAssociationsResponse withListEventIntegrationAssociationsResponse(openapisdk.models.shared.ListEventIntegrationAssociationsResponse listEventIntegrationAssociationsResponse) {
        this.listEventIntegrationAssociationsResponse = listEventIntegrationAssociationsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListEventIntegrationAssociationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListEventIntegrationAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEventIntegrationAssociationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}