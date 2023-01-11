package openapisdk.models.operations;



public class DescribeProvisioningTemplateResponse {
    public String contentType;
    public DescribeProvisioningTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProvisioningTemplateResponse describeProvisioningTemplateResponse;
    public DescribeProvisioningTemplateResponse withDescribeProvisioningTemplateResponse(openapisdk.models.shared.DescribeProvisioningTemplateResponse describeProvisioningTemplateResponse) {
        this.describeProvisioningTemplateResponse = describeProvisioningTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeProvisioningTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeProvisioningTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProvisioningTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProvisioningTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeProvisioningTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeProvisioningTemplateResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}