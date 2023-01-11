package openapisdk.models.operations;



public class PutIntegrationResponse {
    public Object accessDeniedException;
    public PutIntegrationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public PutIntegrationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutIntegrationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.PutIntegrationResponse putIntegrationResponse;
    public PutIntegrationResponse withPutIntegrationResponse(openapisdk.models.shared.PutIntegrationResponse putIntegrationResponse) {
        this.putIntegrationResponse = putIntegrationResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutIntegrationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutIntegrationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}