package openapisdk.models.operations;



public class DescribeActionTargetsResponse {
    public String contentType;
    public DescribeActionTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeActionTargetsResponse describeActionTargetsResponse;
    public DescribeActionTargetsResponse withDescribeActionTargetsResponse(openapisdk.models.shared.DescribeActionTargetsResponse describeActionTargetsResponse) {
        this.describeActionTargetsResponse = describeActionTargetsResponse;
        return this;
    }
    public Object internalException;
    public DescribeActionTargetsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DescribeActionTargetsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DescribeActionTargetsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeActionTargetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeActionTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}