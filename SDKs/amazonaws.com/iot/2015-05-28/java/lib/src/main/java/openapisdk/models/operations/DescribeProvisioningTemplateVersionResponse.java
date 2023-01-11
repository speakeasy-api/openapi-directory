package openapisdk.models.operations;



public class DescribeProvisioningTemplateVersionResponse {
    public String contentType;
    public DescribeProvisioningTemplateVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProvisioningTemplateVersionResponse describeProvisioningTemplateVersionResponse;
    public DescribeProvisioningTemplateVersionResponse withDescribeProvisioningTemplateVersionResponse(openapisdk.models.shared.DescribeProvisioningTemplateVersionResponse describeProvisioningTemplateVersionResponse) {
        this.describeProvisioningTemplateVersionResponse = describeProvisioningTemplateVersionResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeProvisioningTemplateVersionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeProvisioningTemplateVersionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProvisioningTemplateVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProvisioningTemplateVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeProvisioningTemplateVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeProvisioningTemplateVersionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}