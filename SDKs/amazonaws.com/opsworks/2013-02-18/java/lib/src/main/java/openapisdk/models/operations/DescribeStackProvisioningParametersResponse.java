package openapisdk.models.operations;



public class DescribeStackProvisioningParametersResponse {
    public String contentType;
    public DescribeStackProvisioningParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStackProvisioningParametersResult describeStackProvisioningParametersResult;
    public DescribeStackProvisioningParametersResponse withDescribeStackProvisioningParametersResult(openapisdk.models.shared.DescribeStackProvisioningParametersResult describeStackProvisioningParametersResult) {
        this.describeStackProvisioningParametersResult = describeStackProvisioningParametersResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStackProvisioningParametersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStackProvisioningParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeStackProvisioningParametersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}