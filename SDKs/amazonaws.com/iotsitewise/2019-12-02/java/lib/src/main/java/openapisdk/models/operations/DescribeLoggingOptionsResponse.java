package openapisdk.models.operations;



public class DescribeLoggingOptionsResponse {
    public String contentType;
    public DescribeLoggingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLoggingOptionsResponse describeLoggingOptionsResponse;
    public DescribeLoggingOptionsResponse withDescribeLoggingOptionsResponse(openapisdk.models.shared.DescribeLoggingOptionsResponse describeLoggingOptionsResponse) {
        this.describeLoggingOptionsResponse = describeLoggingOptionsResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeLoggingOptionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLoggingOptionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeLoggingOptionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeLoggingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeLoggingOptionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}