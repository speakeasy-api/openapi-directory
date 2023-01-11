package openapisdk.models.operations;



public class DeleteProvisioningTemplateVersionResponse {
    public Object conflictingResourceUpdateException;
    public DeleteProvisioningTemplateVersionResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public DeleteProvisioningTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deleteConflictException;
    public DeleteProvisioningTemplateVersionResponse withDeleteConflictException(Object deleteConflictException) {
        this.deleteConflictException = deleteConflictException;
        return this;
    }
    public java.util.Map<String, Object> deleteProvisioningTemplateVersionResponse;
    public DeleteProvisioningTemplateVersionResponse withDeleteProvisioningTemplateVersionResponse(java.util.Map<String, Object> deleteProvisioningTemplateVersionResponse) {
        this.deleteProvisioningTemplateVersionResponse = deleteProvisioningTemplateVersionResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteProvisioningTemplateVersionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteProvisioningTemplateVersionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProvisioningTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProvisioningTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteProvisioningTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteProvisioningTemplateVersionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}