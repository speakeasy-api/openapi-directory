package openapisdk.models.operations;



public class DescribeProvisioningParametersResponse {
    public String contentType;
    public DescribeProvisioningParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProvisioningParametersOutput describeProvisioningParametersOutput;
    public DescribeProvisioningParametersResponse withDescribeProvisioningParametersOutput(openapisdk.models.shared.DescribeProvisioningParametersOutput describeProvisioningParametersOutput) {
        this.describeProvisioningParametersOutput = describeProvisioningParametersOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribeProvisioningParametersResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProvisioningParametersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProvisioningParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}