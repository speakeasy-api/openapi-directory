package openapisdk.models.operations;



public class DescribeHubResponse {
    public String contentType;
    public DescribeHubResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeHubResponse describeHubResponse;
    public DescribeHubResponse withDescribeHubResponse(openapisdk.models.shared.DescribeHubResponse describeHubResponse) {
        this.describeHubResponse = describeHubResponse;
        return this;
    }
    public Object internalException;
    public DescribeHubResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DescribeHubResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DescribeHubResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DescribeHubResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeHubResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeHubResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}