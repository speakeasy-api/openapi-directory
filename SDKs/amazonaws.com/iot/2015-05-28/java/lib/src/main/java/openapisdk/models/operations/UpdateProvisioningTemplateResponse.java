package openapisdk.models.operations;



public class UpdateProvisioningTemplateResponse {
    public Object conflictingResourceUpdateException;
    public UpdateProvisioningTemplateResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public UpdateProvisioningTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateProvisioningTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateProvisioningTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateProvisioningTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateProvisioningTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateProvisioningTemplateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public java.util.Map<String, Object> updateProvisioningTemplateResponse;
    public UpdateProvisioningTemplateResponse withUpdateProvisioningTemplateResponse(java.util.Map<String, Object> updateProvisioningTemplateResponse) {
        this.updateProvisioningTemplateResponse = updateProvisioningTemplateResponse;
        return this;
    }
}