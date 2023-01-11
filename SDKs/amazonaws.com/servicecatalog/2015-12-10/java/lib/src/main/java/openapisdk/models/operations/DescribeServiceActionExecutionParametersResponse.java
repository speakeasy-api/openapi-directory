package openapisdk.models.operations;



public class DescribeServiceActionExecutionParametersResponse {
    public String contentType;
    public DescribeServiceActionExecutionParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServiceActionExecutionParametersOutput describeServiceActionExecutionParametersOutput;
    public DescribeServiceActionExecutionParametersResponse withDescribeServiceActionExecutionParametersOutput(openapisdk.models.shared.DescribeServiceActionExecutionParametersOutput describeServiceActionExecutionParametersOutput) {
        this.describeServiceActionExecutionParametersOutput = describeServiceActionExecutionParametersOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribeServiceActionExecutionParametersResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeServiceActionExecutionParametersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeServiceActionExecutionParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}