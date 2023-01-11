package openapisdk.models.operations;



public class DeleteAccountAuditConfigurationResponse {
    public String contentType;
    public DeleteAccountAuditConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAccountAuditConfigurationResponse;
    public DeleteAccountAuditConfigurationResponse withDeleteAccountAuditConfigurationResponse(java.util.Map<String, Object> deleteAccountAuditConfigurationResponse) {
        this.deleteAccountAuditConfigurationResponse = deleteAccountAuditConfigurationResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteAccountAuditConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAccountAuditConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAccountAuditConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAccountAuditConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteAccountAuditConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}