package openapisdk.models.operations;



public class ListAccountIntegrationsResponse {
    public Object accessDeniedException;
    public ListAccountIntegrationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public ListAccountIntegrationsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListAccountIntegrationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAccountIntegrationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAccountIntegrationsResponse listAccountIntegrationsResponse;
    public ListAccountIntegrationsResponse withListAccountIntegrationsResponse(openapisdk.models.shared.ListAccountIntegrationsResponse listAccountIntegrationsResponse) {
        this.listAccountIntegrationsResponse = listAccountIntegrationsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAccountIntegrationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAccountIntegrationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAccountIntegrationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}