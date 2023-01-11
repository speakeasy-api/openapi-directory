package openapisdk.models.operations;



public class DescribeGameSessionQueuesResponse {
    public String contentType;
    public DescribeGameSessionQueuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGameSessionQueuesOutput describeGameSessionQueuesOutput;
    public DescribeGameSessionQueuesResponse withDescribeGameSessionQueuesOutput(openapisdk.models.shared.DescribeGameSessionQueuesOutput describeGameSessionQueuesOutput) {
        this.describeGameSessionQueuesOutput = describeGameSessionQueuesOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeGameSessionQueuesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGameSessionQueuesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeGameSessionQueuesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGameSessionQueuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeGameSessionQueuesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}