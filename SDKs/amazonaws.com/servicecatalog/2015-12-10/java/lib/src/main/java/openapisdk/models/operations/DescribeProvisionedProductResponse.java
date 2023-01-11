package openapisdk.models.operations;



public class DescribeProvisionedProductResponse {
    public String contentType;
    public DescribeProvisionedProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProvisionedProductOutput describeProvisionedProductOutput;
    public DescribeProvisionedProductResponse withDescribeProvisionedProductOutput(openapisdk.models.shared.DescribeProvisionedProductOutput describeProvisionedProductOutput) {
        this.describeProvisionedProductOutput = describeProvisionedProductOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribeProvisionedProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProvisionedProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProvisionedProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}