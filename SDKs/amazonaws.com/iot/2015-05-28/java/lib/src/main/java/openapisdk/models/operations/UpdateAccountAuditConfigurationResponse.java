package openapisdk.models.operations;



public class UpdateAccountAuditConfigurationResponse {
    public String contentType;
    public UpdateAccountAuditConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateAccountAuditConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateAccountAuditConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateAccountAuditConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateAccountAuditConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateAccountAuditConfigurationResponse;
    public UpdateAccountAuditConfigurationResponse withUpdateAccountAuditConfigurationResponse(java.util.Map<String, Object> updateAccountAuditConfigurationResponse) {
        this.updateAccountAuditConfigurationResponse = updateAccountAuditConfigurationResponse;
        return this;
    }
}