package openapisdk.models.operations;



public class EnableSecurityHubResponse {
    public Object accessDeniedException;
    public EnableSecurityHubResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public EnableSecurityHubResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableSecurityHubResponse;
    public EnableSecurityHubResponse withEnableSecurityHubResponse(java.util.Map<String, Object> enableSecurityHubResponse) {
        this.enableSecurityHubResponse = enableSecurityHubResponse;
        return this;
    }
    public Object internalException;
    public EnableSecurityHubResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public EnableSecurityHubResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object limitExceededException;
    public EnableSecurityHubResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceConflictException;
    public EnableSecurityHubResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Long statusCode;
    public EnableSecurityHubResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}