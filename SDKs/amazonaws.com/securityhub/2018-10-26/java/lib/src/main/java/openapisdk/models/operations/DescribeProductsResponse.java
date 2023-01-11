package openapisdk.models.operations;



public class DescribeProductsResponse {
    public String contentType;
    public DescribeProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProductsResponse describeProductsResponse;
    public DescribeProductsResponse withDescribeProductsResponse(openapisdk.models.shared.DescribeProductsResponse describeProductsResponse) {
        this.describeProductsResponse = describeProductsResponse;
        return this;
    }
    public Object internalException;
    public DescribeProductsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DescribeProductsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DescribeProductsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DescribeProductsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}