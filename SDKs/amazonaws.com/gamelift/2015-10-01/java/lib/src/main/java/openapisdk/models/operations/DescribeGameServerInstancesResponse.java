package openapisdk.models.operations;



public class DescribeGameServerInstancesResponse {
    public String contentType;
    public DescribeGameServerInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGameServerInstancesOutput describeGameServerInstancesOutput;
    public DescribeGameServerInstancesResponse withDescribeGameServerInstancesOutput(openapisdk.models.shared.DescribeGameServerInstancesOutput describeGameServerInstancesOutput) {
        this.describeGameServerInstancesOutput = describeGameServerInstancesOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeGameServerInstancesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGameServerInstancesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeGameServerInstancesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGameServerInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeGameServerInstancesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}