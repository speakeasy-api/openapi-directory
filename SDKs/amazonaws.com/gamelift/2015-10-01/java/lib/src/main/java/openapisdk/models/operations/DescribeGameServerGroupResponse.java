package openapisdk.models.operations;



public class DescribeGameServerGroupResponse {
    public String contentType;
    public DescribeGameServerGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGameServerGroupOutput describeGameServerGroupOutput;
    public DescribeGameServerGroupResponse withDescribeGameServerGroupOutput(openapisdk.models.shared.DescribeGameServerGroupOutput describeGameServerGroupOutput) {
        this.describeGameServerGroupOutput = describeGameServerGroupOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeGameServerGroupResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGameServerGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeGameServerGroupResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGameServerGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeGameServerGroupResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}