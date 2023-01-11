package openapisdk.models.operations;



public class DescribeProductViewResponse {
    public String contentType;
    public DescribeProductViewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProductViewOutput describeProductViewOutput;
    public DescribeProductViewResponse withDescribeProductViewOutput(openapisdk.models.shared.DescribeProductViewOutput describeProductViewOutput) {
        this.describeProductViewOutput = describeProductViewOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribeProductViewResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProductViewResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProductViewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}