package openapisdk.models.operations;



public class DescribePlayerSessionsResponse {
    public String contentType;
    public DescribePlayerSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePlayerSessionsOutput describePlayerSessionsOutput;
    public DescribePlayerSessionsResponse withDescribePlayerSessionsOutput(openapisdk.models.shared.DescribePlayerSessionsOutput describePlayerSessionsOutput) {
        this.describePlayerSessionsOutput = describePlayerSessionsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribePlayerSessionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribePlayerSessionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribePlayerSessionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePlayerSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribePlayerSessionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}