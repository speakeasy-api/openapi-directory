package openapisdk.models.operations;



public class CreateProvisioningTemplateResponse {
    public String contentType;
    public CreateProvisioningTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProvisioningTemplateResponse createProvisioningTemplateResponse;
    public CreateProvisioningTemplateResponse withCreateProvisioningTemplateResponse(openapisdk.models.shared.CreateProvisioningTemplateResponse createProvisioningTemplateResponse) {
        this.createProvisioningTemplateResponse = createProvisioningTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateProvisioningTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateProvisioningTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateProvisioningTemplateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateProvisioningTemplateResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateProvisioningTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateProvisioningTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreateProvisioningTemplateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}