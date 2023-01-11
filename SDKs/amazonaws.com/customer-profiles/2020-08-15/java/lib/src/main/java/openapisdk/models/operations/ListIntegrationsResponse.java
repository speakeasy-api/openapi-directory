package openapisdk.models.operations;



public class ListIntegrationsResponse {
    public Object accessDeniedException;
    public ListIntegrationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public ListIntegrationsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListIntegrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListIntegrationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListIntegrationsResponse listIntegrationsResponse;
    public ListIntegrationsResponse withListIntegrationsResponse(openapisdk.models.shared.ListIntegrationsResponse listIntegrationsResponse) {
        this.listIntegrationsResponse = listIntegrationsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListIntegrationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListIntegrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListIntegrationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}