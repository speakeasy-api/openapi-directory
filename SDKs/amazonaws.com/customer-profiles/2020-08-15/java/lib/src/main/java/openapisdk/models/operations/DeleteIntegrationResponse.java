package openapisdk.models.operations;



public class DeleteIntegrationResponse {
    public Object accessDeniedException;
    public DeleteIntegrationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public DeleteIntegrationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteIntegrationResponse deleteIntegrationResponse;
    public DeleteIntegrationResponse withDeleteIntegrationResponse(openapisdk.models.shared.DeleteIntegrationResponse deleteIntegrationResponse) {
        this.deleteIntegrationResponse = deleteIntegrationResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteIntegrationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteIntegrationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteIntegrationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}