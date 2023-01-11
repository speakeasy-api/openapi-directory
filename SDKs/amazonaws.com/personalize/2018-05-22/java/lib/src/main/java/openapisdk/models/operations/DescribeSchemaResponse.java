package openapisdk.models.operations;



public class DescribeSchemaResponse {
    public String contentType;
    public DescribeSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSchemaResponse describeSchemaResponse;
    public DescribeSchemaResponse withDescribeSchemaResponse(openapisdk.models.shared.DescribeSchemaResponse describeSchemaResponse) {
        this.describeSchemaResponse = describeSchemaResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeSchemaResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSchemaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}