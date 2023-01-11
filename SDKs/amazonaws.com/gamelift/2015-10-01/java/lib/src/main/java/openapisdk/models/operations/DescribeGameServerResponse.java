package openapisdk.models.operations;



public class DescribeGameServerResponse {
    public String contentType;
    public DescribeGameServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGameServerOutput describeGameServerOutput;
    public DescribeGameServerResponse withDescribeGameServerOutput(openapisdk.models.shared.DescribeGameServerOutput describeGameServerOutput) {
        this.describeGameServerOutput = describeGameServerOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeGameServerResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGameServerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeGameServerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGameServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeGameServerResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}