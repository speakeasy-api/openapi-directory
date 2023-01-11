package openapisdk.models.operations;



public class DescribeStreamResponse {
    public String contentType;
    public DescribeStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStreamResponse describeStreamResponse;
    public DescribeStreamResponse withDescribeStreamResponse(openapisdk.models.shared.DescribeStreamResponse describeStreamResponse) {
        this.describeStreamResponse = describeStreamResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeStreamResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeStreamResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeStreamResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeStreamResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeStreamResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}