package openapisdk.models.operations;



public class CreateProvisioningTemplateVersionResponse {
    public Object conflictingResourceUpdateException;
    public CreateProvisioningTemplateVersionResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public CreateProvisioningTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProvisioningTemplateVersionResponse createProvisioningTemplateVersionResponse;
    public CreateProvisioningTemplateVersionResponse withCreateProvisioningTemplateVersionResponse(openapisdk.models.shared.CreateProvisioningTemplateVersionResponse createProvisioningTemplateVersionResponse) {
        this.createProvisioningTemplateVersionResponse = createProvisioningTemplateVersionResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateProvisioningTemplateVersionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateProvisioningTemplateVersionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateProvisioningTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateProvisioningTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateProvisioningTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreateProvisioningTemplateVersionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public Object versionsLimitExceededException;
    public CreateProvisioningTemplateVersionResponse withVersionsLimitExceededException(Object versionsLimitExceededException) {
        this.versionsLimitExceededException = versionsLimitExceededException;
        return this;
    }
}