package openapisdk.models.operations;



public class ListProvisioningTemplatesResponse {
    public String contentType;
    public ListProvisioningTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListProvisioningTemplatesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListProvisioningTemplatesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListProvisioningTemplatesResponse listProvisioningTemplatesResponse;
    public ListProvisioningTemplatesResponse withListProvisioningTemplatesResponse(openapisdk.models.shared.ListProvisioningTemplatesResponse listProvisioningTemplatesResponse) {
        this.listProvisioningTemplatesResponse = listProvisioningTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public ListProvisioningTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProvisioningTemplatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListProvisioningTemplatesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}