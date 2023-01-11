package openapisdk.models.operations;



public class ListProvisioningTemplateVersionsResponse {
    public String contentType;
    public ListProvisioningTemplateVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListProvisioningTemplateVersionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListProvisioningTemplateVersionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListProvisioningTemplateVersionsResponse listProvisioningTemplateVersionsResponse;
    public ListProvisioningTemplateVersionsResponse withListProvisioningTemplateVersionsResponse(openapisdk.models.shared.ListProvisioningTemplateVersionsResponse listProvisioningTemplateVersionsResponse) {
        this.listProvisioningTemplateVersionsResponse = listProvisioningTemplateVersionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProvisioningTemplateVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProvisioningTemplateVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProvisioningTemplateVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListProvisioningTemplateVersionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}