package openapisdk.models.operations;



public class DescribeFilterResponse {
    public String contentType;
    public DescribeFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFilterResponse describeFilterResponse;
    public DescribeFilterResponse withDescribeFilterResponse(openapisdk.models.shared.DescribeFilterResponse describeFilterResponse) {
        this.describeFilterResponse = describeFilterResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeFilterResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFilterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}