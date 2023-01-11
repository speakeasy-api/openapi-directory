package openapisdk.models.operations;



public class DisableSecurityHubResponse {
    public String contentType;
    public DisableSecurityHubResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableSecurityHubResponse;
    public DisableSecurityHubResponse withDisableSecurityHubResponse(java.util.Map<String, Object> disableSecurityHubResponse) {
        this.disableSecurityHubResponse = disableSecurityHubResponse;
        return this;
    }
    public Object internalException;
    public DisableSecurityHubResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DisableSecurityHubResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object limitExceededException;
    public DisableSecurityHubResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisableSecurityHubResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisableSecurityHubResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}