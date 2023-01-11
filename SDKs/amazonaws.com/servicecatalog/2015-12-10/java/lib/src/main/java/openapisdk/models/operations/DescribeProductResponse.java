package openapisdk.models.operations;



public class DescribeProductResponse {
    public String contentType;
    public DescribeProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProductOutput describeProductOutput;
    public DescribeProductResponse withDescribeProductOutput(openapisdk.models.shared.DescribeProductOutput describeProductOutput) {
        this.describeProductOutput = describeProductOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribeProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}