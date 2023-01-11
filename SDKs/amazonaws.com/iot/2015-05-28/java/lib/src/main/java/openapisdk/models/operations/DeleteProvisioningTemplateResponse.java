package openapisdk.models.operations;



public class DeleteProvisioningTemplateResponse {
    public Object conflictingResourceUpdateException;
    public DeleteProvisioningTemplateResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public DeleteProvisioningTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deleteConflictException;
    public DeleteProvisioningTemplateResponse withDeleteConflictException(Object deleteConflictException) {
        this.deleteConflictException = deleteConflictException;
        return this;
    }
    public java.util.Map<String, Object> deleteProvisioningTemplateResponse;
    public DeleteProvisioningTemplateResponse withDeleteProvisioningTemplateResponse(java.util.Map<String, Object> deleteProvisioningTemplateResponse) {
        this.deleteProvisioningTemplateResponse = deleteProvisioningTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteProvisioningTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteProvisioningTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProvisioningTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProvisioningTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteProvisioningTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteProvisioningTemplateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}