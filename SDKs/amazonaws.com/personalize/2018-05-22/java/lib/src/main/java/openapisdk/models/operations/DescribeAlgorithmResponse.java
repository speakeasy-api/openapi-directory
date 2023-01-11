package openapisdk.models.operations;



public class DescribeAlgorithmResponse {
    public String contentType;
    public DescribeAlgorithmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAlgorithmResponse describeAlgorithmResponse;
    public DescribeAlgorithmResponse withDescribeAlgorithmResponse(openapisdk.models.shared.DescribeAlgorithmResponse describeAlgorithmResponse) {
        this.describeAlgorithmResponse = describeAlgorithmResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeAlgorithmResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAlgorithmResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAlgorithmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}