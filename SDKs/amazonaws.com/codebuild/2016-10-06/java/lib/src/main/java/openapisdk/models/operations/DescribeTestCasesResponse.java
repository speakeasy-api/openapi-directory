package openapisdk.models.operations;



public class DescribeTestCasesResponse {
    public String contentType;
    public DescribeTestCasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTestCasesOutput describeTestCasesOutput;
    public DescribeTestCasesResponse withDescribeTestCasesOutput(openapisdk.models.shared.DescribeTestCasesOutput describeTestCasesOutput) {
        this.describeTestCasesOutput = describeTestCasesOutput;
        return this;
    }
    public Object invalidInputException;
    public DescribeTestCasesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTestCasesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTestCasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}