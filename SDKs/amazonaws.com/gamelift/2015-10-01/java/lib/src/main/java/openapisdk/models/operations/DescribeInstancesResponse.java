package openapisdk.models.operations;



public class DescribeInstancesResponse {
    public String contentType;
    public DescribeInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeInstancesOutput describeInstancesOutput;
    public DescribeInstancesResponse withDescribeInstancesOutput(openapisdk.models.shared.DescribeInstancesOutput describeInstancesOutput) {
        this.describeInstancesOutput = describeInstancesOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeInstancesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeInstancesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeInstancesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeInstancesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}